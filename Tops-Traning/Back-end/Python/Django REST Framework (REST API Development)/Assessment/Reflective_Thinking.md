# Reflective Thinking Answers
**Case Overview**: EduTracker Solutions REST API

## 1. How would you add real-time notifications (e.g., when a student enrolls)?
To implement real-time notifications in Django, I would integrate **Django Channels** and use **WebSockets**.
- **Backend Setup**: Configure an ASGI server (like Daphne or Uvicorn) since WebSockets require asynchronous network capabilities. Add `channels` to the INSTALLED_APPS.
- **WebSocket Consumer**: Create a WebSocket consumer that allows connected mobile/frontend clients to listen for events on a specific channel Group (e.g., `enrollment_notifications`).
- **Trigger event**: In the Django backend, I would utilize Django Signals (specifically `m2m_changed` on the `enrolled_courses` many-to-many field) or override the `perform_create`/`perform_update` method in the ViewSet. When an enrollment is successfully processed, the backend sends a JSON payload to the Channel Group, which is then immediately broadcasated down the WebSocket to any connected mobile client.
- **Third-Party Options (Mobile Focus)**: If building a mobile app, I would also consider relying on **Firebase Cloud Messaging (FCM)**. The Django backend could use Celery to asynchronously trigger a push notification to FCM whenever a student enrolls, offloading socket management entirely.

## 2. How would you allow video course uploads with file size limits?
Handling large media efficiently requires robust storage architecture, rather than storing files directly on the web server disk.
- **Cloud Storage Integration**: I would configure **Django Storages** connected to a cloud blob service like AWS S3 or Google Cloud Storage.
- **Upload Flow (Pre-signed URLs)**: Pushing gigabytes of video through the Django application blocks resources. Instead, I would write an API endpoint that generates an S3 **Pre-signed URL**. The mobile frontend requests this URL and then uploads the video file directly to the S3 bucket. After the upload finishes, the frontend pings a Django endpoint to finalize the `Course` database record with the hosted URL.
- **File Size Validation**:
   - For direct Django uploads: I would implement an NGINX config (`client_max_body_size`) alongside a DRF validator function inside the serializer that checks `if file.size > LIMIT` and blocks the save.
   - For Pre-signed URLs: S3 Conditions like `content-length-range` can securely enforce minimum and maximum file sizes at the object storage level, ensuring users cannot upload files larger than allowed.

## 3. How would you handle rate-limiting for high traffic from frontend/mobile?
Ensuring API availability during high traffic scenarios involves multiple levels of defense:
- **Application Level (DRF Throttling)**: First, I would take advantage of Django REST Framework's built-in `Throttling`. In `settings.py`, I would assign `DEFAULT_THROTTLE_CLASSES` (like `UserRateThrottle` and `AnonRateThrottle`) and set policies such as `{"anon": "100/day", "user": "5000/hour"}`.
- **Caching Layer (Redis)**: Django throttling stores traffic counters. Using the default SQL database will cause bottlenecks, so I would configure **Redis** (`django-redis`) as the centralized caching backend. Redis easily handles millions of rapid read/writes for throttle checking.
- **Infrastructure Level (WAF/API Gateway)**: For true high scale, traffic needs to be mitigated *before* it even reaches the Django application. I would use an API Gateway, NGINX limits (`limit_req_zone`), or a Web Application Firewall like Cloudflare. This way, malicious spam traffic or bursts from the mobile frontend are dropped intelligently at the edge, saving expensive backend compute power.
