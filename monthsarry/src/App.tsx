import {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState } from 'react'

export default function App() {

  const timelineData = [
    {
    title: "Vandiel Childhood Days",
    image: "src/assets/vandiel.png",
    description: "A young boy full of dreams, curiosity, and endless possibilities. Spending his childhood creating memories, learning lessons, and growing into the person he is today."
  },
    {
    title: "Abegaile Childhood Days",
    image: "src/assets/abe.png",
    description: "A cheerful little girl with a bright smile and a kind heart. Her childhood was filled with laughter, adventures, and moments that shaped the wonderful person she would become."
  },
  {
    title: "Where It All Began",
    image: "src/assets/1st-chat.png",
    description: "The beginning of our journey together was marked by a simple conversation that sparked something special. It was the start of a beautiful friendship that would evolve into a deep and meaningful relationship."
  },
  {
    title: "Calling Each Other",
    image: "src/assets/1st-call.png",
    description: "Our first phone call was filled with excitement and nervous energy. We talked for hours, sharing stories and getting to know each other on a deeper level. It was the beginning of our connection that would only grow stronger with time."
  },
  {
    title: "First Church Together",
    image: "src/assets/1st-church.png",
    description: "Our first church together was a meaningful experience that brought us closer. We worshipped side by side, feeling the presence of God and the strength of our bond."
  },
  {
    title: "First Date",
    image: "src/assets/1st-date.png",
    description: "Our first date was a delightful experience filled with laughter and conversation. We explored the city together, getting to know each other in a relaxed and enjoyable setting."
  },
  {
    title: "Valentine's Day",
    image: "src/assets/2.jpg",
    description: "Valentine's Day was a special occasion that brought us closer together. We celebrated our love with a romantic dinner and thoughtful gifts, making it a memory we will cherish forever."
  },
  {
    title: "Jogging Session",
        image: "src/assets/1st-jogging.jpg",
        description: "Our jogging sessions were a great way to stay fit and spend quality time together. We would explore different trails and enjoy the outdoors while supporting each other's fitness goals."
  },

  {
   title: "Last Bonding",
        image: "src/assets/last-bond.png",
        description: "Our last bonding session was a cherished moment that brought us closer together. We reflected on our journey and the memories we had created, feeling grateful for the time we had shared."

  },
];



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
          Unwritten Chapters, Eternal Memories
        </motion.h1>
        
        <motion.p
          className="
          mt-6
          text-lg
          text-zinc-300
          "
          initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
        >
          A collection of moments, memories, and chapters that made this story worth remembering.
        </motion.p>

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
      <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05 }} > Memories </motion.h2>

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

<section className="py-20 px-6 bg-[#0f0f0f] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05 }}  >
          Our Story in Moments
        </motion.h2>

        <div className="relative">
          {/* Center Line */}
<div className="absolute left-5 md:left-1/2 top-0 h-full w-1 bg-pink-500 md:-translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className={`relative mb-12 flex flex-col md:flex-row ${
  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
}`}
            >
              {/* Dot */}
<div className="absolute left-3 md:left-1/2 top-6 w-5 h-5 bg-pink-500 rounded-full border-4 border-[#0f0f0f] md:-translate-x-1/2" />
              {/* Card */}
<div className="ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[45%] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">

                <div className="overflow-hidden rounded-xl mb-4">
  <img
    src={item.image}
    alt={item.title}
    className="w-full object-cover hover:scale-110 transition duration-500"
  />
</div>

                <h3 className="text-2xl font-semibold mb-3">
                  
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.description}</p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-[#0f0f0f] text-white">
      <div className="border border-gray-600 p-8 rounded-2xl">
        <motion.h2 className="text-2xl font-bold text-justify mb-16 flex items-center gap-2"
        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}>
          Hello 
          <p className='text-pink-500'>Abegaile,</p>
        </motion.h2>
        <motion.p className="text-justify text-lg leading-relaxed"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} >
          Kapoy long message oytch, di japon basahon oytch. Byee ka oytch.
        </motion.p>
      </div>
    </section>

         <footer className="border-t border-gray-600 bg-black text-gray-500 text-sm text-center flex justify-between py-6 px-6">

  <p>&copy; {new Date().getFullYear()} All moments reserved in memory</p>
  <p>Made with ❤️ by JovanneDev</p>
</footer>
</>
  )
}
