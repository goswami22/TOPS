import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { 
  DollarSign, ShoppingBag, Clock, CheckCircle2, XCircle, Users, Utensils, FolderTree, 
  MapPin, Calendar, Truck, AlertTriangle, Star, Activity, Plus, Edit2, Trash2, 
  Search, Download, Eye, Shield, Tag, Box, ArrowUpRight, Check, Ban, FileText, 
  Printer, Send, Sliders, Lock, RefreshCw, ChevronRight, Sparkles, Filter, Percent,
  Building2, MessageSquare, Megaphone, Settings as SettingsIcon, Layers, Newspaper
} from 'lucide-react';

export default function AdminDashboardView({ 
  foodItems, setFoodItems,
  categories, setCategories,
  orders, setOrders,
  reservations, setReservations,
  staffList, setStaffList,
  inventory, setInventory,
  customers, setCustomers,
  reviews, setReviews,
  offers, setOffers,
  analyticsData,
  cmsData, setCmsData,
  settingsData, setSettingsData,
  locations
}) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'foods' | 'categories' | 'orders' | 'customers' | 'reservations' | 'coupons' | 'inventory' | 'staff' | 'branches' | 'reviews' | 'analytics' | 'cms' | 'notifications' | 'settings'

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranchFilter, setSelectedBranchFilter] = useState('all');

  // Modals state
  const [foodModalOpen, setFoodModalOpen] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const [orderDetailModal, setOrderDetailModal] = useState(null);
  const [invoiceModalOrder, setInvoiceModalOrder] = useState(null);

  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const [staffModalOpen, setStaffModalOpen] = useState(false);

  // Form State for Food
  const [foodForm, setFoodForm] = useState({
    name: '',
    category: 'burgers',
    price: 25,
    discountPrice: 20,
    calories: 650,
    prepTime: '15 mins',
    spiceLevel: 1,
    isVeg: false,
    isBestseller: false,
    isChefsSpecial: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    description: '',
    ingredients: 'Fresh beef patty, brioche, cheddar'
  });

  // Form State for Category
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    description: '',
    iconName: 'Flame'
  });

  // Form State for Coupon
  const [couponForm, setCouponForm] = useState({
    code: 'FESTIVE25',
    title: '25% Off Chef Feast',
    subtitle: 'Valid on orders over $50',
    discountPercentage: 25,
    minOrder: 50,
    validTill: '2026-08-30'
  });

  // Form State for Staff
  const [staffForm, setStaffForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'staff',
    branch: 'Manhattan Flagship',
    shift: 'Morning'
  });

  // Export mock handler
  const handleExportData = (type) => {
    alert(`Exporting ${type.toUpperCase()} file report... Check your downloads folder.`);
  };

  // Food CRUD Handlers
  const handleSaveFood = (e) => {
    e.preventDefault();
    if (editingFood) {
      setFoodItems(prev => prev.map(f => f.id === editingFood.id ? { ...f, ...foodForm } : f));
    } else {
      const newDish = {
        id: `food-${Date.now()}`,
        ...foodForm,
        rating: 5.0,
        reviewCount: 1,
        addOns: [],
        ingredients: foodForm.ingredients.split(',').map(i => i.trim()),
        allergens: ['Dairy'],
        nutrition: { protein: '30g', carbs: '45g', fat: '25g' }
      };
      setFoodItems(prev => [newDish, ...prev]);
    }
    setFoodModalOpen(false);
    setEditingFood(null);
  };

  const handleEditFoodClick = (food) => {
    setEditingFood(food);
    setFoodForm({
      name: food.name,
      category: food.category,
      price: food.price,
      discountPrice: food.discountPrice || food.price,
      calories: food.calories || 600,
      prepTime: food.prepTime || '15 mins',
      spiceLevel: food.spiceLevel || 0,
      isVeg: food.isVeg || false,
      isBestseller: food.isBestseller || false,
      isChefsSpecial: food.isChefsSpecial || false,
      inStock: food.inStock !== false,
      image: food.image,
      description: food.description,
      ingredients: food.ingredients?.join(', ') || ''
    });
    setFoodModalOpen(true);
  };

  const handleDeleteFood = (id) => {
    if (confirm('Are you sure you want to delete this food item?')) {
      setFoodItems(prev => prev.filter(f => f.id !== id));
    }
  };

  const handleToggleStock = (id) => {
    setFoodItems(prev => prev.map(f => f.id === id ? { ...f, inStock: f.inStock === false ? true : false } : f));
  };

  // Category Handlers
  const handleSaveCategory = (e) => {
    e.preventDefault();
    const defaultImg = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600';
    const finalImage = categoryForm.image?.trim() || defaultImg;
    if (editingCategory) {
      setCategories(prev => prev.map(c => c.id === editingCategory.id ? { ...c, ...categoryForm, image: finalImage } : c));
    } else {
      const newCat = {
        id: categoryForm.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-') || `cat-${Date.now()}`,
        ...categoryForm,
        image: finalImage,
        itemCount: 0
      };
      setCategories(prev => [...prev, newCat]);
    }
    setCategoryModalOpen(false);
    setEditingCategory(null);
  };

  const handleEditCategoryClick = (cat) => {
    setEditingCategory(cat);
    setCategoryForm({
      name: cat.name || '',
      image: cat.image || '',
      description: cat.description || '',
      iconName: cat.iconName || 'Flame'
    });
    setCategoryModalOpen(true);
  };

  const handleDeleteCategory = (catId) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(prev => prev.filter(c => c.id !== catId));
    }
  };

  // Order Status Handler
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    if (orderDetailModal && orderDetailModal.id === orderId) {
      setOrderDetailModal(prev => ({ ...prev, status: newStatus }));
    }
  };

  // Coupon Save Handler
  const handleSaveCoupon = (e) => {
    e.preventDefault();
    const newOffer = {
      id: `offer-${Date.now()}`,
      ...couponForm,
      bgGradient: "from-amber-900/60 to-black",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600"
    };
    setOffers(prev => [newOffer, ...prev]);
    setCouponModalOpen(false);
  };

  // Staff Save Handler
  const handleSaveStaff = (e) => {
    e.preventDefault();
    const newStaff = {
      id: `stf-${Date.now()}`,
      ...staffForm,
      status: 'Active',
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
    };
    setStaffList(prev => [...prev, newStaff]);
    setStaffModalOpen(false);
  };

  // Stats Calculations
  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0) + 42100;
  const totalOrdersCount = orders.length + 378;
  const pendingOrdersCount = orders.filter(o => o.status === 'pending' || o.status === 'cooking').length;
  const completedOrdersCount = orders.filter(o => o.status === 'delivered').length + 320;
  const lowStockAlertsCount = inventory.filter(i => i.status === 'Low Stock' || i.stockQty < i.minThreshold).length;

  const COLORS = ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6'];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      
      {/* Top Admin Header Bar */}
      <header className="bg-[#121110] border-b border-amber-500/20 px-6 py-4 sticky top-0 z-30 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-lg">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              SAVORIA Executive Control Panel
              <span className="px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400 text-amber-300 text-[10px] uppercase tracking-wider font-mono">
                v3.8 Live
              </span>
            </h1>
            <p className="text-xs text-neutral-400">Multi-Branch Operations & Gourmet Commerce Command Center</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Export Reports Button */}
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl p-1 text-xs">
            <button onClick={() => handleExportData('pdf')} className="px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-neutral-300 font-medium flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>PDF Report</span>
            </button>
            <button onClick={() => handleExportData('excel')} className="px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-neutral-300 font-medium flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Excel CSV</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* Admin Navigation Sidebar */}
        <aside className="w-full md:w-64 bg-[#0F0E0D] border-r border-white/10 p-4 space-y-2 shrink-0">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-amber-400/70">
            Navigation Menu
          </div>

          {[
            { id: 'overview', label: 'Overview & Stats', icon: Activity },
            { id: 'foods', label: 'Food Management', icon: Utensils, badge: foodItems.length },
            { id: 'categories', label: 'Categories', icon: FolderTree, badge: categories.length },
            { id: 'orders', label: 'Order Pipeline', icon: ShoppingBag, badge: pendingOrdersCount, badgeColor: 'bg-amber-400 text-black' },
            { id: 'customers', label: 'Customer Base', icon: Users, badge: customers.length },
            { id: 'reservations', label: 'Table Bookings', icon: Calendar, badge: reservations.length },
            { id: 'coupons', label: 'Coupons & Offers', icon: Tag },
            { id: 'inventory', label: 'Inventory & Stock', icon: Box, badge: lowStockAlertsCount, badgeColor: 'bg-rose-500 text-white' },
            { id: 'staff', label: 'Staff & Roles', icon: Shield },
            { id: 'branches', label: 'Branches & Map', icon: Building2 },
            { id: 'reviews', label: 'Customer Reviews', icon: Star },
            { id: 'analytics', label: 'Analytics Reports', icon: BarChart },
            { id: 'cms', label: 'CMS & Banners', icon: Newspaper },
            { id: 'notifications', label: 'Push & Campaigns', icon: Megaphone },
            { id: 'settings', label: 'Store Settings', icon: SettingsIcon }
          ].map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between text-xs font-medium ${
                  isActive 
                    ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-400/10' 
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-black' : 'text-amber-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${item.badgeColor || 'bg-white/10 text-neutral-300'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Admin Content Area */}
        <main className="flex-1 p-6 space-y-8 overflow-x-hidden">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Top Analytics Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="glass-card p-4 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-950/30 to-black space-y-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase font-bold tracking-wider">Total Revenue</span>
                    <DollarSign className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-amber-300">${totalRevenue.toLocaleString()}</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 font-mono">
                    <ArrowUpRight className="w-3 h-3" /> +18.4% this week
                  </div>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-white/10 bg-white/5 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase font-bold tracking-wider">Total Orders</span>
                    <ShoppingBag className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-white">{totalOrdersCount}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">28 orders today</div>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-1">
                  <div className="flex items-center justify-between text-amber-300">
                    <span className="text-[10px] uppercase font-bold tracking-wider">Pending Orders</span>
                    <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-amber-400">{pendingOrdersCount}</div>
                  <div className="text-[10px] text-amber-300 font-mono">In Kitchen Prep</div>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-white/10 bg-white/5 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase font-bold tracking-wider">Completed</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-emerald-300">{completedOrdersCount}</div>
                  <div className="text-[10px] text-emerald-400 font-mono">98.2% fulfillment rate</div>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-white/10 bg-white/5 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase font-bold tracking-wider">Low Stock Alerts</span>
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-rose-300">{lowStockAlertsCount}</div>
                  <div className="text-[10px] text-rose-400 font-mono">Requires Restock</div>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-white/10 bg-white/5 space-y-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase font-bold tracking-wider">Reservations</span>
                    <Calendar className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-purple-300">{reservations.length}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Booked today</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Revenue Trend Area Chart */}
                <div className="lg:col-span-8 glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-serif text-lg font-medium text-white">Revenue & Sales Trends</h3>
                      <p className="text-xs text-neutral-400">Daily gross revenue over current operational week</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                      Weekly Peak: $14,800
                    </span>
                  </div>

                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={analyticsData?.dailyRevenue || []}>
                        <defs>
                          <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="day" stroke="#666" fontSize={11} />
                        <YAxis stroke="#666" fontSize={11} tickFormatter={(val) => `$${val}`} />
                        <Tooltip contentStyle={{ backgroundColor: '#121212', borderColor: '#333', borderRadius: '12px' }} />
                        <Area type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Sales Category Pie Chart */}
                <div className="lg:col-span-4 glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                  <h3 className="font-serif text-lg font-medium text-white">Category Revenue Share</h3>
                  <div className="h-48 w-full flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={analyticsData?.categoryPerformance || []}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={75}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {(analyticsData?.categoryPerformance || []).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#121212', borderColor: '#333' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {(analyticsData?.categoryPerformance || []).slice(0, 4).map((cat, idx) => (
                      <div key={idx} className="flex justify-between items-center text-neutral-300">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                          {cat.category}
                        </span>
                        <span className="font-mono font-bold text-white">{cat.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Recent Orders & Activity Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Recent Pipeline Orders Table */}
                <div className="lg:col-span-8 glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-lg font-medium text-white">Live Kitchen & Order Pipeline</h3>
                    <button onClick={() => setActiveTab('orders')} className="text-xs text-amber-300 font-bold hover:underline">
                      View All Pipeline &rarr;
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="border-b border-white/10 text-neutral-400 font-mono text-[10px] uppercase">
                        <tr>
                          <th className="pb-3">Order ID</th>
                          <th className="pb-3">Customer</th>
                          <th className="pb-3">Status</th>
                          <th className="pb-3">Branch</th>
                          <th className="pb-3">Total</th>
                          <th className="pb-3 text-right">Quick Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {orders.map((ord) => (
                          <tr key={ord.id} className="hover:bg-white/5">
                            <td className="py-3 font-mono font-bold text-amber-400">{ord.id}</td>
                            <td className="py-3 font-medium text-white">{ord.customerName || 'Gourmet Guest'}</td>
                            <td className="py-3">
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                ord.status === 'delivered' ? 'bg-emerald-500/20 text-emerald-400' :
                                ord.status === 'out_for_delivery' ? 'bg-blue-500/20 text-blue-400' :
                                ord.status === 'cooking' ? 'bg-amber-500/20 text-amber-400' : 'bg-neutral-800 text-neutral-400'
                              }`}>
                                {ord.status.replace(/_/g, ' ')}
                              </span>
                            </td>
                            <td className="py-3 text-neutral-400">{ord.branch || 'Main Flagship'}</td>
                            <td className="py-3 font-mono font-bold text-amber-300">${ord.totalAmount?.toFixed(2)}</td>
                            <td className="py-3 text-right space-x-2">
                              <button
                                onClick={() => setOrderDetailModal(ord)}
                                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                                title="View Details"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setInvoiceModalOrder(ord)}
                                className="p-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-300"
                                title="Print Invoice"
                              >
                                <Printer className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Low Stock & Staff Activity Feed */}
                <div className="lg:col-span-4 glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                  <h3 className="font-serif text-lg font-medium text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Low Stock Alerts</span>
                  </h3>

                  <div className="space-y-3">
                    {inventory.filter(i => i.status === 'Low Stock').map((inv) => (
                      <div key={inv.id} className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-white block">{inv.name}</span>
                          <span className="text-neutral-400 text-[10px]">Supplier: {inv.supplier}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-rose-400 font-bold block">{inv.stockQty} {inv.unit} left</span>
                          <span className="text-[9px] text-neutral-500">Min: {inv.minThreshold} {inv.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="border-white/10" />

                  <h4 className="font-serif text-sm font-medium text-white">Top Selling Dishes Today</h4>
                  <div className="space-y-2">
                    {foodItems.slice(0, 3).map((f) => (
                      <div key={f.id} className="flex justify-between items-center text-xs p-2 rounded-xl bg-white/5">
                        <span className="text-white font-medium line-clamp-1">{f.name}</span>
                        <span className="font-mono text-amber-300 font-bold">${f.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: FOOD MANAGEMENT */}
          {activeTab === 'foods' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-medium text-white">Food Catalog & Culinary Offerings</h2>
                  <p className="text-xs text-neutral-400">Manage dishes, variants, pricing, ingredients, tags & availability</p>
                </div>
                <button
                  onClick={() => {
                    setEditingFood(null);
                    setFoodForm({
                      name: '',
                      category: 'burgers',
                      price: 28,
                      discountPrice: 22,
                      calories: 600,
                      prepTime: '15 mins',
                      spiceLevel: 1,
                      isVeg: false,
                      isBestseller: false,
                      isChefsSpecial: false,
                      inStock: true,
                      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
                      description: '',
                      ingredients: ''
                    });
                    setFoodModalOpen(true);
                  }}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase text-xs tracking-wider rounded-xl transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Dish</span>
                </button>
              </div>

              {/* Foods Datatable */}
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                  <Search className="w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search food by name, category..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="bg-transparent text-xs text-white focus:outline-none w-full"
                  />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/5 border-b border-white/10 text-neutral-400 font-mono text-[10px] uppercase">
                      <tr>
                        <th className="p-4">Dish</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Tags</th>
                        <th className="p-4">Stock Status</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {foodItems.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase())).map((food) => (
                        <tr key={food.id} className="hover:bg-white/5">
                          <td className="p-4 flex items-center gap-3">
                            <img src={food.image} alt={food.name} className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                            <div>
                              <span className="font-bold text-white block">{food.name}</span>
                              <span className="text-[10px] text-neutral-400 line-clamp-1">{food.description}</span>
                            </div>
                          </td>
                          <td className="p-4 font-medium text-amber-300 uppercase text-[10px] tracking-wider">{food.category}</td>
                          <td className="p-4 font-mono font-bold text-white">
                            ${food.price}
                            {food.discountPrice && <span className="text-[10px] text-emerald-400 ml-1">(${food.discountPrice})</span>}
                          </td>
                          <td className="p-4">
                            <div className="flex flex-wrap gap-1">
                              {food.isBestseller && <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[9px] font-bold">Bestseller</span>}
                              {food.isChefsSpecial && <span className="px-2 py-0.5 rounded bg-purple-400/20 text-purple-300 text-[9px] font-bold">Chef Special</span>}
                              {food.isVeg && <span className="px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300 text-[9px] font-bold">VEG</span>}
                            </div>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => handleToggleStock(food.id)}
                              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${
                                food.inStock !== false ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                              }`}
                            >
                              {food.inStock !== false ? 'In Stock' : 'Out of Stock'}
                            </button>
                          </td>
                          <td className="p-4 text-right space-x-2">
                            <button onClick={() => handleEditFoodClick(food)} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white" title="Edit">
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => handleDeleteFood(food.id)} className="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300" title="Delete">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CATEGORY MANAGEMENT */}
          {activeTab === 'categories' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-medium text-white">Menu Categories</h2>
                  <p className="text-xs text-neutral-400">Organize dishes into intuitive, visual menu sections</p>
                </div>
                <button
                  onClick={() => {
                    setEditingCategory(null);
                    setCategoryForm({ name: '', image: '', description: '', iconName: 'Flame' });
                    setCategoryModalOpen(true);
                  }}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase text-xs tracking-wider rounded-xl transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Category</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                  <div key={cat.id} className="glass-card p-5 rounded-3xl border border-white/10 flex items-center justify-between gap-4 hover:border-amber-400/30 transition-all">
                    <div className="flex items-center gap-4 min-w-0">
                      <img src={cat.image} alt={cat.name} className="w-16 h-16 rounded-2xl object-cover border border-amber-400/30 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-white text-base truncate">{cat.name}</h4>
                        <p className="text-xs text-neutral-400 line-clamp-1">{cat.description}</p>
                        <span className="text-[10px] font-mono text-amber-300 block mt-1">{cat.itemCount || 8} Active Dishes</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <button onClick={() => handleEditCategoryClick(cat)} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" title="Edit Category">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => handleDeleteCategory(cat.id)} className="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 transition-colors" title="Delete Category">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ORDER PIPELINE & MANAGEMENT */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-medium text-white">Kitchen & Delivery Pipeline</h2>
                  <p className="text-xs text-neutral-400">Accept, cooking status, driver dispatch & invoice controls</p>
                </div>
              </div>

              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden space-y-4 p-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/5 border-b border-white/10 text-neutral-400 font-mono text-[10px] uppercase">
                      <tr>
                        <th className="p-3">Order Code</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Items Summary</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3 text-right">Change Status / Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {orders.map((ord) => (
                        <tr key={ord.id} className="hover:bg-white/5">
                          <td className="p-3 font-mono font-bold text-amber-400">{ord.id}</td>
                          <td className="p-3">
                            <span className="font-bold text-white block">{ord.customerName || 'Julian Vance'}</span>
                            <span className="text-[10px] text-neutral-400">{ord.customerPhone}</span>
                          </td>
                          <td className="p-3">
                            <span className="text-neutral-300">{ord.items?.length || 1} items</span>
                            <span className="text-[10px] text-neutral-500 block">{ord.deliveryAddress?.slice(0, 25)}...</span>
                          </td>
                          <td className="p-3">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                              ord.status === 'delivered' ? 'bg-emerald-500/20 text-emerald-400' :
                              ord.status === 'cooking' ? 'bg-amber-500/20 text-amber-400' :
                              ord.status === 'out_for_delivery' ? 'bg-blue-500/20 text-blue-400' : 'bg-neutral-800 text-neutral-400'
                            }`}>
                              {ord.status.replace(/_/g, ' ')}
                            </span>
                          </td>
                          <td className="p-3 font-mono font-bold text-amber-300">${ord.totalAmount?.toFixed(2)}</td>
                          <td className="p-3 text-right space-x-1.5">
                            <select
                              value={ord.status}
                              onChange={(e) => handleUpdateOrderStatus(ord.id, e.target.value)}
                              className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-white focus:outline-none"
                            >
                              <option value="pending" className="bg-black">Pending</option>
                              <option value="accepted" className="bg-black">Accepted</option>
                              <option value="cooking" className="bg-black">Cooking</option>
                              <option value="ready" className="bg-black">Ready for Pickup</option>
                              <option value="out_for_delivery" className="bg-black">Out for Delivery</option>
                              <option value="delivered" className="bg-black">Delivered</option>
                              <option value="cancelled" className="bg-black">Cancelled</option>
                            </select>
                            <button onClick={() => setInvoiceModalOrder(ord)} className="p-1.5 bg-amber-400/20 text-amber-300 rounded-lg" title="Print Invoice">
                              <Printer className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CUSTOMER MANAGEMENT */}
          {activeTab === 'customers' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Customer Database & Profiles</h2>
                <p className="text-xs text-neutral-400">View loyalty tiers, spent history, order counts & account access</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customers.map((cust) => (
                  <div key={cust.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                    <div className="flex items-center gap-4">
                      <img src={cust.avatar} alt={cust.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-400" />
                      <div>
                        <h4 className="font-serif text-lg font-bold text-white">{cust.name}</h4>
                        <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase">
                          {cust.tier}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-neutral-300">
                      <div>Email: <strong className="text-white">{cust.email}</strong></div>
                      <div>Phone: <strong className="text-white">{cust.phone}</strong></div>
                      <div>Total Spent: <strong className="text-amber-300 font-mono">${cust.totalSpent.toFixed(2)}</strong> ({cust.totalOrders} orders)</div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-white/10 text-xs">
                      <span className="font-mono text-neutral-400">{cust.loyaltyPoints} Loyalty PTS</span>
                      <button
                        onClick={() => {
                          setCustomers(prev => prev.map(c => c.id === cust.id ? { ...c, status: c.status === 'Active' ? 'Blocked' : 'Active' } : c));
                        }}
                        className={`px-3 py-1 rounded-xl text-[10px] font-bold uppercase ${
                          cust.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {cust.status === 'Active' ? 'Account Active' : 'Account Blocked'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: RESERVATIONS */}
          {activeTab === 'reservations' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Dining Reservations & Booking Calendar</h2>
                <p className="text-xs text-neutral-400">Manage VIP table requests and guest dining schedules</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reservations.map((res) => (
                  <div key={res.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold text-amber-400 text-xs">{res.confirmationCode}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        res.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {res.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">{res.fullName}</h4>
                      <p className="text-xs text-amber-300 font-medium">{res.branchName}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs bg-white/5 p-3 rounded-2xl">
                      <div>Date: <strong className="text-white block">{res.date}</strong></div>
                      <div>Time: <strong className="text-white block">{res.time}</strong></div>
                      <div>Guests: <strong className="text-white block">{res.guests} Persons</strong></div>
                      <div>Zone: <strong className="text-white block">{res.seatingZone}</strong></div>
                    </div>

                    {res.specialRequests && (
                      <p className="text-[11px] text-neutral-400 italic">"{res.specialRequests}"</p>
                    )}

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          setReservations(prev => prev.map(r => r.id === res.id ? { ...r, status: 'confirmed' } : r));
                        }}
                        className="flex-1 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold rounded-xl"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          setReservations(prev => prev.map(r => r.id === res.id ? { ...r, status: 'cancelled' } : r));
                        }}
                        className="flex-1 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-bold rounded-xl"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: COUPONS & OFFERS */}
          {activeTab === 'coupons' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-medium text-white">Coupons & Promotional Offers</h2>
                  <p className="text-xs text-neutral-400">Create promo codes, festival discounts, BOGO & free delivery rules</p>
                </div>
                <button
                  onClick={() => setCouponModalOpen(true)}
                  className="px-4 py-2.5 bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-300 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Promo Code</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offers.map((off) => (
                  <div key={off.id} className="glass-card p-6 rounded-3xl border border-amber-500/30 space-y-3 relative overflow-hidden bg-gradient-to-br from-amber-950/40 to-black">
                    <span className="px-3 py-1 bg-amber-400 text-black text-xs font-mono font-bold rounded-lg uppercase">
                      Code: {off.code}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white pt-2">{off.title}</h4>
                    <p className="text-xs text-neutral-300">{off.subtitle}</p>
                    <div className="text-[10px] text-amber-300 font-mono pt-2">
                      Min Order: ${off.minOrder || 0} • Valid: {off.validTill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: INVENTORY MANAGEMENT */}
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Raw Ingredient Inventory & Stock</h2>
                <p className="text-xs text-neutral-400">Track stock levels, low threshold warnings & supplier purchases</p>
              </div>

              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 border-b border-white/10 text-neutral-400 font-mono text-[10px] uppercase">
                    <tr>
                      <th className="p-4">Ingredient Name</th>
                      <th className="p-4">Stock Level</th>
                      <th className="p-4">Threshold</th>
                      <th className="p-4">Supplier</th>
                      <th className="p-4">Unit Cost</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {inventory.map((inv) => (
                      <tr key={inv.id} className="hover:bg-white/5">
                        <td className="p-4 font-bold text-white">{inv.name}</td>
                        <td className="p-4 font-mono font-bold text-amber-300">{inv.stockQty} {inv.unit}</td>
                        <td className="p-4 font-mono text-neutral-400">{inv.minThreshold} {inv.unit}</td>
                        <td className="p-4 text-neutral-300">{inv.supplier}</td>
                        <td className="p-4 font-mono text-white">${inv.costPerUnit}/{inv.unit}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            inv.status === 'Optimal' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                          }`}>
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 9: STAFF MANAGEMENT */}
          {activeTab === 'staff' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-medium text-white">Staff Roster & Role Permissions</h2>
                  <p className="text-xs text-neutral-400">Assign Admins, Managers, Chefs, Delivery Drivers & Cashiers</p>
                </div>
                <button
                  onClick={() => setStaffModalOpen(true)}
                  className="px-4 py-2.5 bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-300 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Staff Member</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffList.map((stf) => (
                  <div key={stf.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                    <div className="flex items-center gap-4">
                      <img src={stf.avatar} alt={stf.name} className="w-12 h-12 rounded-full object-cover border border-amber-400" />
                      <div>
                        <h4 className="font-serif text-base font-bold text-white">{stf.name}</h4>
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] uppercase font-bold rounded">
                          {stf.role}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-neutral-300 space-y-1">
                      <div>Branch: <strong className="text-white">{stf.branch}</strong></div>
                      <div>Shift: <strong className="text-white">{stf.shift}</strong></div>
                      <div>Contact: <strong className="text-neutral-400">{stf.phone}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: BRANCH MANAGEMENT */}
          {activeTab === 'branches' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Restaurant Locations & Branch Operations</h2>
                <p className="text-xs text-neutral-400">Manage multiple flagship locations, opening hours & Google Maps links</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {locations.map((loc) => (
                  <div key={loc.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                    <img src={loc.image} alt={loc.name} className="w-full h-40 object-cover rounded-2xl border border-white/10" />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">{loc.name}</h4>
                      <p className="text-xs text-neutral-400">{loc.address}</p>
                    </div>
                    <div className="text-xs text-amber-300 font-mono">
                      {loc.openHours} • Rating: {loc.rating} ★
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Customer Feedback & Reviews</h2>
                <p className="text-xs text-neutral-400">Moderate ratings, approve or hide submitted food critic reviews</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((rev) => (
                  <div key={rev.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
                    <div className="flex items-center gap-3">
                      <img src={rev.customerPhoto} alt={rev.customerName} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-white">{rev.customerName}</h4>
                        <span className="text-[10px] text-amber-300 font-mono">{rev.dishName}</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-300 italic font-serif">"{rev.comment}"</p>
                    <div className="flex justify-between items-center text-xs pt-2">
                      <span className="text-amber-400 font-bold">{rev.rating} / 5 Stars</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold">Approved</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 12: ANALYTICS & REPORTS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Executive Analytics & Revenue Reports</h2>
                <p className="text-xs text-neutral-400">Deep breakdown of peak ordering hours, monthly growth and sales metrics</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                  <h3 className="font-serif text-lg font-medium text-white">Peak Order Volume by Hour</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analyticsData?.peakHours || []}>
                        <XAxis dataKey="hour" stroke="#666" fontSize={11} />
                        <YAxis stroke="#666" fontSize={11} />
                        <Tooltip contentStyle={{ backgroundColor: '#121212', borderColor: '#333' }} />
                        <Bar dataKey="orders" fill="#F59E0B" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                  <h3 className="font-serif text-lg font-medium text-white">Category Performance</h3>
                  <div className="space-y-4">
                    {(analyticsData?.categoryPerformance || []).map((cat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs text-neutral-300">
                          <span>{cat.category}</span>
                          <span className="font-mono text-amber-300 font-bold">${cat.value.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-400 rounded-full" style={{ width: `${cat.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 13: CMS MANAGEMENT */}
          {activeTab === 'cms' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Content Management System (CMS)</h2>
                <p className="text-xs text-neutral-400">Edit homepage banners, about us content, blog posts & FAQs</p>
              </div>

              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white">Homepage Hero Banner Content</h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-neutral-400 block mb-1">Headline Title</label>
                    <input
                      type="text"
                      value={cmsData?.heroBanner?.title || ''}
                      onChange={e => setCmsData({ ...cmsData, heroBanner: { ...cmsData.heroBanner, title: e.target.value } })}
                      className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 block mb-1">Subtitle Description</label>
                    <input
                      type="text"
                      value={cmsData?.heroBanner?.subtitle || ''}
                      onChange={e => setCmsData({ ...cmsData, heroBanner: { ...cmsData.heroBanner, subtitle: e.target.value } })}
                      className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 14: NOTIFICATIONS */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 max-w-2xl">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Broadcast Promotional Campaigns</h2>
                <p className="text-xs text-neutral-400">Send push, email, and SMS notifications to all registered customers</p>
              </div>

              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-300">Campaign Title</label>
                  <input type="text" placeholder="e.g. Weekend Truffle Tasting Special" className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-300">Message Content</label>
                  <textarea rows={3} placeholder="Write promotional broadcast copy..." className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white" />
                </div>
                <button onClick={() => alert('Campaign broadcast queued to 184 registered customers!')} className="w-full py-3 bg-amber-400 text-black font-bold uppercase text-xs rounded-xl hover:bg-amber-300">
                  Broadcast Campaign Now
                </button>
              </div>
            </div>
          )}

          {/* TAB 15: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-3xl">
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-white">Global Restaurant Settings</h2>
                <p className="text-xs text-neutral-400">Configure business info, taxes, delivery fees, payment gateways & API keys</p>
              </div>

              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-neutral-400 block mb-1">Restaurant Name</label>
                    <input type="text" value={settingsData.name} onChange={e => setSettingsData({ ...settingsData, name: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
                  </div>
                  <div>
                    <label className="text-neutral-400 block mb-1">Tax Rate (%)</label>
                    <input type="number" step="0.1" value={settingsData.taxRate} onChange={e => setSettingsData({ ...settingsData, taxRate: parseFloat(e.target.value) })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
                  </div>
                </div>

                <div className="pt-2">
                  <button onClick={() => alert('Settings saved successfully!')} className="px-6 py-2.5 bg-amber-400 text-black font-bold uppercase text-xs rounded-xl">
                    Save Global Settings
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* FOOD ADD/EDIT MODAL */}
      {foodModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#121212] border border-amber-500/30 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-xl font-bold text-white">
                {editingFood ? 'Edit Food Item' : 'Add New Dish to Menu'}
              </h3>
              <button onClick={() => setFoodModalOpen(false)} className="text-neutral-400 hover:text-white">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveFood} className="space-y-3 text-xs">
              <div>
                <label className="text-neutral-300 block mb-1">Dish Name</label>
                <input required type="text" value={foodForm.name} onChange={e => setFoodForm({ ...foodForm, name: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-neutral-300 block mb-1">Category</label>
                  <select value={foodForm.category} onChange={e => setFoodForm({ ...foodForm, category: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white">
                    {categories.map(c => <option key={c.id} value={c.id} className="bg-black">{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-neutral-300 block mb-1">Price ($)</label>
                  <input required type="number" value={foodForm.price} onChange={e => setFoodForm({ ...foodForm, price: parseFloat(e.target.value) })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
                </div>
              </div>

              <div>
                <label className="text-neutral-300 block mb-1">Image URL</label>
                <input required type="text" value={foodForm.image} onChange={e => setFoodForm({ ...foodForm, image: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>

              <div>
                <label className="text-neutral-300 block mb-1">Description</label>
                <textarea rows={2} value={foodForm.description} onChange={e => setFoodForm({ ...foodForm, description: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>

              <div className="flex gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-white">
                  <input type="checkbox" checked={foodForm.isBestseller} onChange={e => setFoodForm({ ...foodForm, isBestseller: e.target.checked })} />
                  <span>Bestseller Tag</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-white">
                  <input type="checkbox" checked={foodForm.isChefsSpecial} onChange={e => setFoodForm({ ...foodForm, isChefsSpecial: e.target.checked })} />
                  <span>Chef Special</span>
                </label>
              </div>

              <button type="submit" className="w-full py-3 bg-amber-400 text-black font-bold uppercase tracking-wider rounded-xl hover:bg-amber-300 transition-colors">
                Save Food Item
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PRINT INVOICE MODAL */}
      {invoiceModalOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-white text-black rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-serif text-xl font-bold">SAVORIA Gourmet</h3>
                <p className="text-xs text-gray-500">Official Tax Invoice</p>
              </div>
              <button onClick={() => setInvoiceModalOrder(null)} className="text-gray-400 hover:text-black">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs space-y-1 font-mono">
              <div>Invoice #: <strong className="text-black">{invoiceModalOrder.id}</strong></div>
              <div>Customer: <strong>{invoiceModalOrder.customerName || 'Julian Vance'}</strong></div>
              <div>Date: <span>{invoiceModalOrder.createdAt}</span></div>
            </div>

            <div className="border-y py-2 space-y-1 text-xs font-mono">
              {invoiceModalOrder.items?.map((it, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>{it.foodItem?.name} (x{it.quantity})</span>
                  <span>${it.itemTotal?.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="text-right text-xs space-y-1 font-mono">
              <div>Subtotal: ${invoiceModalOrder.subtotal?.toFixed(2)}</div>
              <div>Tax: ${invoiceModalOrder.tax?.toFixed(2)}</div>
              <div>Delivery: ${invoiceModalOrder.deliveryFee?.toFixed(2)}</div>
              <div className="text-base font-bold text-black border-t pt-1">Total: ${invoiceModalOrder.totalAmount?.toFixed(2)}</div>
            </div>

            <button onClick={() => window.print()} className="w-full py-2.5 bg-black text-white font-bold uppercase text-xs rounded-xl flex items-center justify-center gap-2">
              <Printer className="w-4 h-4" />
              <span>Print Invoice Document</span>
            </button>
          </div>
        </div>
      )}

      {/* CREATE COUPON MODAL */}
      {couponModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#121212] border border-amber-500/30 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-lg font-bold text-white">Create Promo Coupon</h3>
              <button onClick={() => setCouponModalOpen(false)} className="text-neutral-400 hover:text-white"><XCircle className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveCoupon} className="space-y-3 text-xs">
              <div>
                <label className="text-neutral-300 block mb-1">Promo Code</label>
                <input required type="text" value={couponForm.code} onChange={e => setCouponForm({ ...couponForm, code: e.target.value.toUpperCase() })} className="w-full p-2 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>
              <div>
                <label className="text-neutral-300 block mb-1">Title</label>
                <input required type="text" value={couponForm.title} onChange={e => setCouponForm({ ...couponForm, title: e.target.value })} className="w-full p-2 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>
              <button type="submit" className="w-full py-2.5 bg-amber-400 text-black font-bold uppercase rounded-xl">Save Coupon</button>
            </form>
          </div>
        </div>
      )}

      {/* ADD STAFF MODAL */}
      {staffModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#121212] border border-amber-500/30 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-lg font-bold text-white">Add Staff Member</h3>
              <button onClick={() => setStaffModalOpen(false)} className="text-neutral-400 hover:text-white"><XCircle className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveStaff} className="space-y-3 text-xs">
              <div>
                <label className="text-neutral-300 block mb-1">Full Name</label>
                <input required type="text" value={staffForm.name} onChange={e => setStaffForm({ ...staffForm, name: e.target.value })} className="w-full p-2 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>
              <div>
                <label className="text-neutral-300 block mb-1">Role</label>
                <select value={staffForm.role} onChange={e => setStaffForm({ ...staffForm, role: e.target.value })} className="w-full p-2 bg-white/5 border border-white/10 rounded-xl text-white">
                  <option value="staff" className="bg-black">Chef / Staff</option>
                  <option value="manager" className="bg-black">Branch Manager</option>
                  <option value="admin" className="bg-black">System Admin</option>
                </select>
              </div>
              <button type="submit" className="w-full py-2.5 bg-amber-400 text-black font-bold uppercase rounded-xl">Add Staff Member</button>
            </form>
          </div>
        </div>
      )}

      {/* CATEGORY ADD/EDIT MODAL */}
      {categoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#121212] border border-amber-500/30 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-xl font-bold text-white">
                {editingCategory ? 'Edit Menu Category' : 'Add New Category'}
              </h3>
              <button onClick={() => setCategoryModalOpen(false)} className="text-neutral-400 hover:text-white">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="space-y-4 text-xs">
              <div>
                <label className="text-neutral-300 block mb-1 font-medium">Category Name</label>
                <input
                  required
                  type="text"
                  value={categoryForm.name}
                  onChange={e => setCategoryForm({ ...categoryForm, name: e.target.value })}
                  placeholder="e.g. Artisanal Desserts"
                  className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-neutral-300 block mb-1 font-medium">Cover Image URL</label>
                <input
                  type="text"
                  value={categoryForm.image}
                  onChange={e => setCategoryForm({ ...categoryForm, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
                <p className="text-[10px] text-neutral-500 mt-1">Leave blank to use default gourmet photography</p>
              </div>

              <div>
                <label className="text-neutral-300 block mb-1 font-medium">Description</label>
                <textarea
                  rows={3}
                  value={categoryForm.description}
                  onChange={e => setCategoryForm({ ...categoryForm, description: e.target.value })}
                  placeholder="Short, enticing description of this category..."
                  className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setCategoryModalOpen(false)}
                  className="flex-1 py-3 bg-white/10 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-amber-400 text-black font-bold uppercase tracking-wider rounded-xl hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/10"
                >
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
