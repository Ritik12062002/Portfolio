import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, Zap, Server } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-2 transition-transform duration-300"></div>
                            <div className="relative bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                                <Terminal className="w-12 h-12 text-blue-500 mb-6" />
                                <p className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                                    I am a <strong>DevOps Engineer</strong> with 1 year of hands-on experience in automating, scaling, and securing cloud infrastructure.
                                    My passion lies in bridging the gap between development and operations, ensuring seamless software delivery through robust CI/CD pipelines and efficient container orchestration.
                                </p>
                                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                                    I specialize in <strong>AWS, Docker, Kubernetes, Terraform, OpenStack, and GitLab</strong>. I believe in "Infrastructure as Code" and strive to build self-healing, reliable systems that allow developers to focus on shipping code.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {[
                            { icon: Cpu, title: "Automation", desc: "CI/CD & Scripting", color: "text-blue-500" },
                            { icon: Globe, title: "Cloud Native", desc: "AWS & GCP Arch", color: "text-indigo-500" },
                            { icon: Zap, title: "Performance", desc: "Optimization", color: "text-yellow-500" },
                            { icon: Server, title: "Reliability", desc: "High Availability", color: "text-emerald-500" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                                <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
