import { ref, computed } from 'vue';

const currentLang = ref('en');

const translations = {
    en: {
        nav: {
            roadmap: 'Roadmap',
            market: 'Target',
            vision: 'Vision',
            testFlight: 'Test Flight',
            support: 'Support Us'
        },
        hero: {
            badge: 'Alpha Version Live',
            title_p1: 'Your Study Bestie.',
            title_p2: 'Track Feelings,',
            title_p3: 'Not Just Grades.',
            subtitle: 'An alpha-stage companion designed to help students navigate academic pressure. Join us to build the future of student wellness.',
            pitchDeck: 'Support Us',
            tryNow: 'Try Now',
            card: {
                greeting: 'Good Morning',
                moodTitle: "Today's Mood",
                moodStatus: 'Logged',
                moodName: 'Neutral',
                moodDesc: 'Just feeling okay',
                weeklyGoal: 'Weekly Goal',
                education: 'Education',
                university: 'University',
                mascotTooltip: '"Drink water! 💧"'
            },
            benefits: {
                free: '100% Free',
                noAds: 'No Ads',
                privacy: 'Local Data Privacy',
                pwa: 'Web-Based & PWA'
            }
        },
        features: {
            urgency: 'The Urgency',
            title: 'Solving the Silent Struggle',
            subtitle: 'Students are facing unprecedented levels of burnout, yet most tools only track academic output. We are building the first platform to prioritize the student\'s emotional state, addressing mental health proactively before crisis strikes.',
            cards: {
                tracker: {
                    title: 'Expressive Mood Tracker',
                    desc: 'Currently available in our alpha. Students can log their feelings instantly with a single tap, moving beyond simple 1-5 scales to expressive, nuanced emotion selection.',
                    badge: 'Alpha Live'
                },
                vibe: {
                    title: 'Vibe Customization',
                    desc: 'Students can personalize their experience by customizing the interface and their Axolotl companion, fostering a sense of ownership and comfort in their digital study space.',
                    badge: 'Alpha Live'
                },
                companion: {
                    title: 'Axolotl Companion',
                    desc: 'A gamified "Study Buddy" that reacts to user input. This psychological anchor encourages consistent engagement through positive reinforcement, currently active in the alpha build.',
                    badge: 'Alpha Live'
                },
                analytics: {
                    title: 'Mood Analytics',
                    desc: 'Planned for Beta. Proprietary algorithms will analyze mood patterns against study schedules to detect early stress markers and proactively suggest breaks.',
                    badge: 'Coming Soon'
                },
                diary: {
                    title: 'Diary Timeline',
                    desc: 'A visual timeline that contextualizes emotions with life events. This feature is in development to help students connect specific academic triggers to their emotional well-being.',
                    badge: 'Coming Soon'
                },
                sync: {
                    title: 'Cross-Platform Sync',
                    desc: 'Future roadmap includes seamless syncing across React Native mobile apps and Electron desktop clients, ensuring your emotional analytics travel with you.',
                    badge: 'Planned'
                }
            }
        },
        vision: {
            avgMood: 'Average Mood',
            balanced: 'Balanced',
            projected: 'Projected Insight',
            target: 'Target',
            warning: 'Top Stressor Identified',
            anxiety: 'Exam Anxiety: High',
            title: 'Vision & Impact',
            titleHighlight: 'The Future of Wellness.',
            desc: 'StudyMood is currently in Alpha, laying the foundation for a proactive mental health ecosystem. We are moving beyond simple tracking to build a platform that predicts and prevents burnout before it happens.',
            points: {
                prediction: {
                    title: 'Predictive Intervention',
                    desc: 'Future AI models will identify stress correlations and prompt timely breaks.'
                },
                literacy: {
                    title: 'Emotional Literacy',
                    desc: 'Helping students build vocabulary for their feelings through daily logging habits.'
                },
                impact: {
                    title: 'Institutional Impact',
                    desc: 'Long-term vision includes aggregated, anonymous insights for educators.'
                }
            },
            comparison: {
                old: {
                    title: 'The Old Way',
                    badge: 'Struggle',
                    items: [
                        'Ignoring burnout until it\'s too late',
                        'Grades are the only metric of success',
                        'Isolated struggles without support',
                        'Reactive mental health measures'
                    ]
                },
                new: {
                    title: 'The StudyMood Way',
                    badge: 'Solution',
                    items: [
                        'Proactive emotional tracking',
                        'Wellness balanced with academics',
                        'Gamified consistency & community',
                        'Data-driven insights for prevention'
                    ]
                }
            }
        },
        roadmap: {
            label: 'The Journey',
            title: 'Development Roadmap',
            desc: 'We are building in public. Here is our plan to evolve StudyMood from a simple tracker to a comprehensive wellness ecosystem.',
            phases: [
                {
                    title: 'Phase 1: Foundation',
                    subtitle: 'Q4 2025 - Alpha',
                    status: 'current',
                    items: ['Core Mood Tracking', 'Vibe Customization', 'Axolotl Companion', 'Local Data Storage']
                },
                {
                    title: 'Phase 2: Insight',
                    subtitle: 'Q1 2026 - Beta',
                    status: 'upcoming',
                    items: ['Mood Analytics Dashboard', 'Diary Timeline View', 'Weekly Progress Reports', 'User Feedback Integration']
                },
                {
                    title: 'Phase 3: Ecosystem',
                    subtitle: 'Q2 2026 - V1.0',
                    status: 'future',
                    items: ['Cross-Platform Sync', 'Education Institution Access', 'Community Challenges', 'AI Predictive Alerts']
                }
            ]
        },
        target: {
            label: 'Target Audience',
            title: 'Designed for every stage of education',
            university: {
                title: 'University Students',
                badge: 'Primary Market',
                desc: 'University students face high-stakes exams and independent living challenges. StudyMood acts as their daily check-in to ensure academic rigor doesn\'t compromise mental stability.'
            },
            highschool: {
                title: 'High Schoolers',
                badge: 'Secondary Market',
                desc: 'Developing emotional intelligence early is key. We provide a safe, gamified environment for younger students to begin understanding and tracking their stress triggers.'
            },
            educators: {
                title: 'Educators',
                badge: 'Future Partners',
                desc: 'We aim to empower educators with data. In the future, StudyMood will offer tools to help institutions understand the collective emotional pulse of their student body.'
            }
        },
        support: {
            title: 'Support the Mission',
            subtitle: 'Built independently. Driven by passion. Join us in building the future of student wellness.',
            sponsor: {
                title: 'Become a Sponsor',
                desc: 'Since this is an individual project, funds will be used for development and to support volunteers.',
                button: 'Sponsor Now'
            },
            volunteer: {
                title: 'Contributors',
                desc: 'Join our open source community. Test new features or contribute code.',
                details: [
                    'TestFlight Alpha Access',
                    'GitHub Open Source',
                    'Feedback & Bug Reports'
                ],
                buttons: {
                    discord: 'Join Discord',
                    github: 'View GitHub'
                }
            }
        },
        footer: {
            desc: 'Empowering students to achieve their best through emotional intelligence and AI companionship.',
            product: 'Product',
            company: 'Company',
            legal: 'Legal',
            links: {
                roadmap: 'Roadmap',
                vision: 'Vision',
                schools: 'For Schools',
                about: 'About',
                careers: 'Careers',
                blog: 'Blog',
                privacy: 'Privacy',
                terms: 'Terms'
            },
            rights: 'All rights reserved.'
        }
    },
    id: {
        nav: {
            roadmap: 'Peta Jalan',
            market: 'Target',
            vision: 'Visi',
            testFlight: 'Uji Coba',
            support: 'Dukung Kami'
        },
        hero: {
            badge: 'Versi Alpha Live',
            title_p1: 'Teman Belajarmu.',
            title_p2: 'Pantau Perasaan,',
            title_p3: 'Bukan Cuma Nilai.',
            subtitle: 'Pendamping tahap alpha yang dirancang untuk membantu mahasiswa menghadapi tekanan akademik. Bergabunglah bersama kami membangun masa depan kesejahteraan siswa.',
            pitchDeck: 'Dukung Kami',
            tryNow: 'Coba Sekarang',
            card: {
                greeting: 'Selamat Pagi',
                moodTitle: 'Mood Hari Ini',
                moodStatus: 'Tercatat',
                moodName: 'Netral',
                moodDesc: 'Biasa saja',
                weeklyGoal: 'Target Mingguan',
                education: 'Pendidikan',
                university: 'Universitas',
                mascotTooltip: '"Minum air! 💧"'
            },
            benefits: {
                free: '100% Gratis',
                noAds: 'Tanpa Iklan',
                privacy: 'Privasi Aman (Data Lokal)',
                pwa: 'Berbasis Web & PWA'
            }
        },
        features: {
            urgency: 'Urgensi',
            title: 'Mengatasi Perjuangan Mental Yang Tak Terlihat',
            subtitle: 'Siswa menghadapi tingkat kelelahan yang belum pernah terjadi sebelumnya, namun sebagian besar alat hanya melacak hasil akademik. Kami membangun platform pertama yang memprioritaskan keadaan emosional siswa, menangani kesehatan mental secara proaktif sebelum krisis terjadi.',
            cards: {
                tracker: {
                    title: 'Pelacak Mood Ekspresif',
                    desc: 'Tersedia di alpha kami. Siswa dapat mencatat perasaan mereka secara instan dengan satu ketukan, beralih dari skala 1-5 sederhana ke pemilihan emosi yang ekspresif dan bernuansa.',
                    badge: 'Alpha Live'
                },
                vibe: {
                    title: 'Kustomisasi Vibe',
                    desc: 'Siswa dapat mempersonalisasi pengalaman mereka dengan menyesuaikan antarmuka dan pendamping Axolotl mereka, menumbuhkan rasa kepemilikan dan kenyamanan dalam ruang belajar digital mereka.',
                    badge: 'Alpha Live'
                },
                companion: {
                    title: 'Pendamping Axolotl',
                    desc: '"Teman Belajar" yang digamifikasi yang bereaksi terhadap input pengguna. Jangkar psikologis ini mendorong keterlibatan yang konsisten melalui penguatan positif, saat ini aktif di build alpha.',
                    badge: 'Alpha Live'
                },
                analytics: {
                    title: 'Analitik Mood',
                    desc: 'Direncanakan untuk Beta. Algoritma khusus akan menganalisis pola suasana hati terhadap jadwal belajar untuk mendeteksi penanda stres awal dan secara proaktif menyarankan istirahat.',
                    badge: 'Segera Hadir'
                },
                diary: {
                    title: 'Timeline Harian',
                    desc: 'Timeline visual yang mengontekstualisasikan emosi dengan peristiwa kehidupan. Fitur ini sedang dalam pengembangan untuk membantu siswa menghubungkan pemicu akademik tertentu dengan kesejahteraan emosional mereka.',
                    badge: 'Segera Hadir'
                },
                sync: {
                    title: 'Sinkronisasi Lintas Platform',
                    desc: 'Peta jalan masa depan mencakup sinkronisasi mulus di aplikasi seluler React Native dan klien desktop Electron, memastikan analitik emosional Anda bepergian bersama Anda.',
                    badge: 'Direncanakan'
                }
            }
        },
        vision: {
            avgMood: 'Rata-rata Mood',
            balanced: 'Seimbang',
            projected: 'Wawasan Proyeksi',
            target: 'Target',
            warning: 'Pemicu Stres Utama',
            anxiety: 'Kecemasan Ujian: Tinggi',
            title: 'Visi & Dampak',
            titleHighlight: 'Masa Depan Kesehatan.',
            desc: 'StudyMood saat ini dalam tahap Alpha, meletakkan dasar bagi ekosistem kesehatan mental yang proaktif. Kami beralih dari pelacakan sederhana untuk membangun platform yang memprediksi dan mencegah kelelahan sebelum itu terjadi.',
            points: {
                prediction: {
                    title: 'Intervensi Prediktif',
                    desc: 'Model AI masa depan akan mengidentifikasi korelasi stres dan mendorong istirahat tepat waktu.'
                },
                literacy: {
                    title: 'Literasi Emosional',
                    desc: 'Membantu siswa membangun kosakata untuk perasaan mereka melalui kebiasaan mencatat setiap hari.'
                },
                impact: {
                    title: 'Dampak Institusional',
                    desc: 'Visi jangka panjang mencakup wawasan agregat dan anonim untuk pendidik.'
                }
            },
            comparison: {
                old: {
                    title: 'Cara Lama',
                    badge: 'Masalah',
                    items: [
                        'Mengabaikan burnout sampai terlambat',
                        'Nilai adalah satu-satunya ukuran sukses',
                        'Berjuang sendiri tanpa dukungan',
                        'Tindakan kesehatan mental reaktif'
                    ]
                },
                new: {
                    title: 'Cara StudyMood',
                    badge: 'Solusi',
                    items: [
                        'Pelacakan emosional proaktif',
                        'Kesehatan seimbang dengan akademik',
                        'Gamifikasi konsistensi & komunitas',
                        'Wawasan berbasis data untuk pencegahan'
                    ]
                }
            }
        },

        roadmap: {
            label: 'Perjalanan',
            title: 'Peta Jalan Pengembangan',
            desc: 'Kami membangun secara terbuka. Inilah rencana kami untuk mengembangkan StudyMood dari pelacak sederhana menjadi ekosistem kesehatan yang komprehensif.',
            phases: [
                {
                    title: 'Fase 1: Fondasi',
                    subtitle: 'Q4 2025 - Alpha',
                    status: 'current',
                    items: ['Pelacakan Mood Inti', 'Kustomisasi Vibe', 'Pendamping Axolotl', 'Penyimpanan Data Lokal']
                },
                {
                    title: 'Fase 2: Wawasan',
                    subtitle: 'Q1 2026 - Beta',
                    status: 'upcoming',
                    items: ['Dashboard Analitik Mood', 'Tampilan Timeline Harian', 'Laporan Kemajuan Mingguan', 'Integrasi Feedback Pengguna']
                },
                {
                    title: 'Fase 3: Ekosistem',
                    subtitle: 'Q2 2026 - V1.0',
                    status: 'future',
                    items: ['Sinkronisasi Lintas Platform', 'Akses Institusi Pendidikan', 'Tantangan Komunitas', 'Peringatan AI Prediktif']
                }
            ]
        },
        target: {
            label: 'Target Audiens',
            title: 'Dirancang untuk setiap jenjang pendidikan',
            university: {
                title: 'Mahasiswa',
                badge: 'Pasar Utama',
                desc: 'Mahasiswa menghadapi ujian berisiko tinggi dan tantangan hidup mandiri. StudyMood bertindak sebagai check-in harian mereka untuk memastikan ketelitian akademik tidak membahayakan stabilitas mental.'
            },
            highschool: {
                title: 'Siswa SMA',
                badge: 'Pasar Sekunder',
                desc: 'Mengembangkan kecerdasan emosional sejak dini adalah kuncinya. Kami menyediakan lingkungan yang aman dan digamifikasi bagi siswa yang lebih muda untuk mulai memahami dan melacak pemicu stres mereka.'
            },
            educators: {
                title: 'Pendidik',
                badge: 'Mitra Masa Depan',
                desc: 'Kami bertujuan untuk memberdayakan pendidik dengan data. Di masa depan, StudyMood akan menawarkan alat untuk membantu institusi memahami denyut nadi emosional kolektif dari badan siswa mereka.'
            }
        },
        support: {
            title: 'Dukung Misi Kami',
            subtitle: 'Dibangun sendiri. Didorong oleh passion. Bergabunglah membangun masa depan kesehatan siswa.',
            sponsor: {
                title: 'Jadi Sponsor',
                desc: 'Karena ini proyek individu, dana akan digunakan untuk pengembangan dan mendukung volunteer.',
                button: 'Sponsori Sekarang'
            },
            volunteer: {
                title: 'Kontributor',
                desc: 'Bergabung dengan komunitas open source kami. Uji fitur baru atau kontribusi kode.',
                details: [
                    'Akses Alpha TestFlight',
                    'GitHub Open Source',
                    'Laporan Bug & Feedback'
                ],
                buttons: {
                    discord: 'Gabung Discord',
                    github: 'Lihat GitHub'
                }
            }
        },
        footer: {
            desc: 'Memberdayakan siswa untuk mencapai potensi terbaik mereka melalui kecerdasan emosional dan pendamping AI.',
            product: 'Produk',
            company: 'Perusahaan',
            legal: 'Hukum',
            links: {
                roadmap: 'Peta Jalan',
                vision: 'Visi',
                schools: 'Untuk Sekolah',
                about: 'Tentang',
                careers: 'Karir',
                blog: 'Blog',
                privacy: 'Privasi',
                terms: 'Syarat & Ketentuan'
            },
            rights: 'Hak cipta dilindungi undang-undang.'
        }
    }
};

export function useLanguage() {
    const toggleLanguage = () => {
        currentLang.value = currentLang.value === 'en' ? 'id' : 'en';
        localStorage.setItem('lang', currentLang.value);
    };

    const setLanguage = (lang) => {
        if (['en', 'id'].includes(lang)) {
            currentLang.value = lang;
            localStorage.setItem('lang', lang);
        }
    }


    // Initialize from local storage if available
    // Initialize from local storage if available and valid
    if (typeof window !== 'undefined') {
        const storedLang = localStorage.getItem('lang');
        if (storedLang && ['en', 'id'].includes(storedLang)) {
            currentLang.value = storedLang;
        }
    }

    return {
        currentLang,
        t: computed(() => translations[currentLang.value]),
        toggleLanguage,
        setLanguage
    };

}
