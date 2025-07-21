import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter,
  Calendar,
  User,
  Eye,
  BarChart3
} from 'lucide-react';

// Sample blog data - this would come from Supabase in a real implementation
const blogPosts = [
  {
    id: 1,
    title: "5 Stretches Every Woman in Menopause Should Know",
    excerpt: "Discover gentle stretches that can help alleviate common menopause symptoms and improve your daily comfort.",
    category: "Menopause Wellness",
    status: "Published",
    publishDate: "2024-01-15",
    author: {
      name: "Chayma Al Zein",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&auto=format"
    },
    views: 1245,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: 2,
    title: "Rebuilding Strength After Breast Cancer",
    excerpt: "A comprehensive guide to safely regaining physical strength and confidence during cancer recovery.",
    category: "Cancer Recovery",
    status: "Published",
    publishDate: "2024-01-10",
    author: {
      name: "Chayma Al Zein",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&auto=format"
    },
    views: 892,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: 3,
    title: "How Autism Movement Therapy Helps Kids Thrive",
    excerpt: "Understanding the benefits of specialized movement therapy for children on the autism spectrum.",
    category: "Autism Support",
    status: "Draft",
    publishDate: null,
    author: {
      name: "Chayma Al Zein",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&auto=format"
    },
    views: 0,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format"
  }
];

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || post.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-700';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-700';
      case 'Archived':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Blog Dashboard</h1>
              <p className="text-muted-foreground">Manage your blog posts and content</p>
            </div>
            <Button 
              onClick={() => setShowNewPostForm(true)}
              className="bg-accent hover:bg-accent/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Posts</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Published</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
                <Eye className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Drafts</p>
                  <p className="text-2xl font-bold text-foreground">4</p>
                </div>
                <Edit className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                  <p className="text-2xl font-bold text-foreground">5.2k</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'All' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('All')}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === 'Published' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('Published')}
                  size="sm"
                >
                  Published
                </Button>
                <Button
                  variant={filterStatus === 'Draft' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('Draft')}
                  size="sm"
                >
                  Drafts
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Avatar className="w-5 h-5">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{post.author.name}</span>
                        </div>
                        {post.publishDate && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.publishDate}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(post.status)}>
                      {post.status}
                    </Badge>
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;