import React, { useEffect, useState } from 'react';

const BlogListele = () => {

    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = async () => {
        try {
            const response = await fetch("/api/blog/liste");
            const data = await response.json();
            if (data.success) {
                setBlogs(data.blogs);
            } else {
                setError(data.message || "Bloglar Bulunamadı");
            }
        } catch (error) {
            console.error("Fetch Error:", error)
            setError(error.message)
        }   finally {
            setLoading(false)
        }
    };

    useEffect(()=>{
        fetchBlogs();
    },[]);

    const deleteBlog = async (id) => {
        if (!window.confirm("Bu blogu silmek istediğinize emin misiniz?")) {
            return;
        }
        try {
            const response = await fetch(`/api/blog/sil/${id}`, {
                method: "DELETE"
            });
    
            
            let data = null;
            try {
                data = await response.json();
            } catch (e) {
                console.error('Yanıt JSON formatında değil:', e);
            }
    
            console.log('Response status:', response.status);
            console.log('Response data:', data);
    
            if (response.ok && data && data.success) {
                setBlogs(blogs.filter((blog) => blog._id !== id));
                alert(data.message || "Blog başarıyla silindi.");
            } else {
                alert((data && data.message) || "Blog silinemedi.");
            }
        } catch (error) {
            console.error("Delete Error:", error);
            alert("Bir hata oluştu.");
        }
    };
    

    if (loading) return <p>Yükleniyor...</p>
    if (error) return <p>Hata: {error}</p>

    console.log(blogs)
  return (
    <div className="container mx-auto px-4 pb-4 h-screen">
            <h1 className="text-2xl font-bold mb-4">Blog Listesi</h1>
            {blogs.length > 0 ? (
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Başlık</th>
                            <th className="py-2 px-4 border">URL</th>
                            <th className="py-2 px-4 border">Diller</th>
                            <th className="py-2 px-4 border">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog._id}>
                                <td className="py-2 px-4 border">
                                    {blog.sections['tr'][0]?.title || 'Başlık yok'}
                                </td>
                                <td className="py-2 px-4 border">{blog.url}</td>
                                <td className="py-2 px-4 border">
                                    {['tr', 'en', 'ru', 'de'].map((lang) => (
                                        <span
                                            key={lang}
                                            className={`inline-block px-2 py-1 rounded mr-1 text-sm ${
                                                blog.sections[lang]?.length > 0
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-gray-200 text-gray-500'
                                            }`}
                                        >
                                            {lang.toUpperCase()}
                                        </span>
                                    ))}
                                </td>
                                <td className="py-2 px-4 border">
                                    <button
                                        onClick={() => deleteBlog(blog._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Blog bulunamadı.</p>
            )}
        </div>
  )
}

export default BlogListele