class facebook:
    total_like = 0
    bhavesh = 0
    jay = 0
    uma = 0

    @staticmethod
    def userlike(self,count):
        facebook.total_like = facebook.total_like + count


facebook.bhavesh += 5
facebook.jay += 3
facebook.uma += 8

facebook.userlike(facebook ,facebook.bhavesh)
facebook.userlike(facebook ,facebook.jay)
facebook.userlike(facebook ,facebook.uma)


print('Bhavesh like : ',facebook.bhavesh)
print('jay like : ',facebook.jay)
print('Uma like : ',facebook.uma)
print('Total like : ',facebook.total_like)



