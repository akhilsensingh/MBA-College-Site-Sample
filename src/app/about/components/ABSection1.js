import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function AbSection1() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Reimagine <br /> <span className="text-gradient">Business Education</span>
          </motion.h1>

          <p className="text-gray-300 text-base md:text-lg">
            At Masters' Union, we believe in <strong>learning business by doing business</strong>.<br />
            Through collaboration of industry experts and academic leaders, we aim to revolutionise
            business education with a tech-centric and industry-driven approach.
          </p>
        </div>

        {/* Center Video Preview */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex-1 rounded-xl overflow-hidden max-w-[500px] shadow-xl"
        >
          <Image
            src="/a709e6d0-814a-43ba-b7c6-a97fbf3cd7a4.png"
            alt="Masters Union Video Preview"
            width={500}
            height={280}
            className="rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button className="bg-white text-black p-3 rounded-full shadow-lg">
              <Play className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute left-4 bottom-4 text-white">
            <p className="text-sm font-medium">Masters' Union In</p>
            <p className="text-3xl font-bold">
              <span className="text-blue-400">3</span> <span className="text-yellow-400">Minutes</span>
            </p>
          </div>
        </motion.div>

        {/* Right Goal Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 max-w-[250px] bg-zinc-900 text-white p-6 rounded-xl shadow-md text-center"
        >
          <p className="text-lg font-semibold">Goal <span className="text-green-400">2030</span></p>
          <p className="text-sm text-gray-300 mt-2">Reach Global Top 10 Ranking</p>
        </motion.div>
      </div>
    </section>
  );
}

