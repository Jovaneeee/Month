import {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState } from 'react'

export default function App() {

   const images = [
    "src/assets/1.jpg",
    "src/assets/3.jpg",
    "src/assets/4.jpg",
    "src/assets/5.jpg",
     "src/assets/6.jpg",
    "src/assets/7.jpg",
    "src/assets/8.jpg",
    "src/assets/9.jpg",
    "src/assets/10.jpg",
     "src/assets/11.jpg",
    "src/assets/12.jpg",
    "src/assets/13.jpg",
    "src/assets/14.jpg",
    "src/assets/15.jpg",
    "src/assets/16.jpg",
    "src/assets/17.jpg",
  ]

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 4000)

    return () => clearInterval(interval)
  }, [])
  return (
    <>
    <section
      className="
      relative
      h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      "
    >

      {/* BACKGROUND IMAGE */}
      <img
        src="src/assets/2.jpg"
        alt="background"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover

        grayscale
        brightness-[50%]
        contrast-125

        scale-110
        blur-sm
        "
      />



      {/* CONTENT */}
      <div
        className="
        relative
        z-10

        px-6
        text-center
        max-w-4xl
        "
      >

        {/* TITLE */}
        <motion.h1
          className="
          mt-3

          text-5xl
          md:text-6xl

          font-semibold
          leading-tight
          text-pink-500
          "
          initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
        >
          Once ours, now just memory❤️
        </motion.h1>

        {/* BUTTONS */}
        <motion.div
          className="
          mt-12

          flex
          flex-col
          md:flex-row

          items-center
          justify-center

          gap-5
          "
          initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
        >


        </motion.div>

      </div>

      {/* FLOATING GLOW */}
      <div
        className="
        absolute
        w-[500px]
        h-[500px]

        bg-red-500/10
        blur-[120px]

        rounded-full

        top-[-100px]
        right-[-100px]
        "
      />

      {/* SCROLL DOWN */}
      <div
        className="
        absolute
        bottom-10

        flex
        flex-col
        items-center

        text-zinc-400

        animate-bounce
        "
      >

        <span className="text-xs tracking-[4px]">
          SCROLL
        </span>

        <span className="text-3xl">
          ↓
        </span>

      </div>

    </section>

 <section
      className="relative bg-black flex flex-col items-center justify-center min-h-screen px-6 py-6"
      id="memories"
    >
      {/* TITLE */}
      <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-pink-500 after:mt-2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05 }} > Memories </motion.h2>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-3xl flex items-center justify-center">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/40"
        >
          ❮
        </button>

        {/* IMAGE WITH FADE */}
        <motion.div className="w-full h-[500px] relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05 }}

        >


          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              className="absolute w-full h-full object-cover filter grayscale contrast-125"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

        </motion.div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/40"
        >
          ❯
        </button>

      </div>
    </section>

    <section className='min-h-screen bg-black px-6 py-6'>

            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-pink-500 after:mt-2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05 }} > Message </motion.h2>

            <motion.div className="border-gray-700 border rounded-lg bg-gray-900 max-w-3xl p-6 mx-auto"
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05 }}>
              <p className="text-gray-300 leading-relaxed text-justify">
                Hi Abs,
              </p>
              <br />
              <p className="text-gray-300 leading-relaxed text-justify">

                Kapoy long message oyy, di japon basahon
              </p>
            </motion.div>


    </section>

         <footer className="border-t border-gray-600 bg-black text-gray-500 text-sm text-center flex justify-between py-6 px-6">

  <p>&copy; {new Date().getFullYear()} All moments reserved in memory</p>
  <p>Made with ❤️ for you</p>
</footer>
</>
  )
}
