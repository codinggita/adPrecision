import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Rocket, Library, Info, Monitor, Zap } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import UploadDropzone from '../components/upload/UploadDropzone';
import UploadQueue from '../components/upload/UploadQueue';
import UploadHistory from '../components/upload/UploadHistory';
import { addToQueue, updateQueueProgress, finishUpload, removeFromHistory, deleteUploadedFile } from '../store/slices/uploadSlice';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import toast from 'react-hot-toast';
import uploadBg from '../assets/upload-bg.png';

const UploadPage = () => {
    useSmoothScroll();
    const dispatch = useDispatch();
    const { uploadedFiles, uploadQueue, history } = useSelector(state => state.upload);

    const handleFilesSelected = useCallback((files) => {
        files.forEach(file => {
            // Validation
            const allowedTypes = ['video/mp4', 'video/quicktime', 'image/jpeg', 'image/png'];
            if (!allowedTypes.includes(file.type)) {
                toast.error(`Invalid format: ${file.name}`, {
                    style: { borderRadius: '20px', background: '#991B1B', color: '#fff', fontSize: '12px' }
                });
                return;
            }

            if (file.size > 500 * 1024 * 1024) {
                toast.error(`File too large: ${file.name}`, {
                    style: { borderRadius: '20px', background: '#991B1B', color: '#fff', fontSize: '12px' }
                });
                return;
            }

            // Add to Redux Queue
            const uploadId = Date.now() + Math.random();
            const newFile = {
                id: uploadId,
                name: file.name,
                size: file.size,
                type: file.type,
                progress: 0,
                status: 'UPLOADING'
            };
            dispatch(addToQueue(newFile));

            // Simulate Upload (Cloudinary Integration logic would go here)
            let progress = 0;
            const step = 100 / (10 + Math.random() * 20); // Simulate network speed
            
            const interval = setInterval(() => {
                progress += step;
                if (progress >= 100) {
                    clearInterval(interval);
                    dispatch(finishUpload({
                        id: uploadId,
                        name: file.name,
                        status: 'READY',
                        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
                        resolution: file.type.startsWith('image') ? '1080 x 1080 px' : '1920 x 1080 px',
                        timestamp: 'Just now',
                        thumbnail: undefined // In real app, Cloudinary URL
                    }));
                    toast.success(`${file.name} ready for broadcast`, {
                         style: { borderRadius: '20px', background: '#1C3A3A', color: '#fff', fontWeight: '900', fontSize: '10px' }
                    });
                } else {
                    dispatch(updateQueueProgress({ id: uploadId, progress }));
                }
            }, 300);
        });
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex font-sans relative overflow-hidden">
            <Sidebar />

            <div className="flex-1 ml-20 relative z-10">
                <Navbar searchPlaceholder="Search creatives, campaigns, or tags..." />

                {/* Decorative Background Image */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none select-none z-0 opacity-20 transform translate-x-1/4 -translate-y-1/4 blur-3xl">
                    <img src={uploadBg} alt="" className="w-full h-full object-cover rounded-full" />
                </div>

                <main className="p-12 max-w-[1600px] mx-auto pb-32 relative z-10">
                    {/* Header Controls */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 px-2">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl"
                        >
                            <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-[0.2em] border border-emerald-100/50 mb-6 inline-block">MEDIA LIBRARY</span>
                            <h1 className="text-6xl font-black text-[#1C3A3A] tracking-tighter mb-4 leading-none decoration-[#1C3A3A]/10 underline underline-offset-[12px]">
                                Creative Upload.
                            </h1>
                            <p className="text-slate-500 font-bold text-lg leading-relaxed mt-4">
                                Import your high-fidelity ad creatives. We support high-dynamic range visuals and multi-format video assets for precision distribution.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-6 pt-6"
                        >
                            <button className="px-10 py-5 rounded-[22px] bg-white border-2 border-slate-100 text-[#1C3A3A] text-[11px] font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4">
                                <Library size={18} />
                                Browse Library
                            </button>
                            <button className="px-12 py-5 rounded-[22px] bg-[#5C3300] text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-950/30 hover:bg-[#4A2900] hover:-translate-y-1 transition-all flex items-center gap-4 group">
                                <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Launch Campaign
                            </button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Upload Area */}
                        <div className="lg:col-span-8">
                            <UploadDropzone onFilesSelected={handleFilesSelected} />
                        </div>

                        {/* Sidebar Info & Queue */}
                        <div className="lg:col-span-4 flex flex-col gap-12">
                            {/* Asset Standards */}
                            <div className="bg-slate-50/50 p-10 rounded-[48px] border border-slate-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <Info className="text-[#5C3300]" size={20} />
                                    <h4 className="text-lg font-black text-[#1C3A3A] tracking-tighter">Asset Standards</h4>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm"><Monitor size={20} /></div>
                                        <div>
                                            <p className="text-sm font-black text-[#1C3A3A] mb-1">Dimensions</p>
                                            <p className="text-[11px] font-bold text-slate-400 leading-relaxed">Minimum 1080×1080px for social placements.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm"><Zap size={20} /></div>
                                        <div>
                                            <p className="text-sm font-black text-[#1C3A3A] mb-1">Bitrate</p>
                                            <p className="text-[11px] font-bold text-slate-400 leading-relaxed">Keep videos under 15Mbps for seamless loading.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <UploadQueue queue={uploadQueue} />
                        </div>
                    </div>

                    {/* History Section */}
                    <UploadHistory 
                        uploadedFiles={uploadedFiles} 
                        history={history} 
                        onDeleteFile={(id) => dispatch(deleteUploadedFile(id))}
                        onRemoveHistory={(id) => dispatch(removeFromHistory(id))}
                    />
                </main>
            </div>
        </div>
    );
};

export default UploadPage;
