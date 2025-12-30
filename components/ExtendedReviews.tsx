"use client";

import React from "react";
import { motion } from "framer-motion";

const reviews = [
	{
		name: "Alexander Akers",
		role: "Senior iOS Engineer",
		company: "Apple",
		text: "I get worried when I use a computer without @paste_app. What if there's something important on the clipboard? It's like how you can \"hold\" a piece in Tetris but you have to remember what it is.",
	},
	{
		name: "João Cunha",
		role: "Senior Product Manager",
		company: "Nubank",
		text: "Few things have had as much impact on my Mac workflow as @paste_app. It may look irrelevant, but think of how many times you copy/paste things over the course of a day — Paste makes this process a gazillion times better.",
	},
	{
		name: "Jonathan Z. White",
		role: "Designer & Developer",
		company: "Airbnb",
		text: "I've been using an app called @paste_app and it's almost hilarious how much of a workflow improvement it is.",
	},
	{
		name: "Chris Messina",
		role: "Hashtag Inventor",
		company: "",
		text: "This is a must-have Mac app for me. I use it dozens if not hundreds of times a day. So useful!",
	},
	{
		name: "Kristen Wright",
		role: "Marketing",
		company: "Day One Journal",
		text: "Finally bought @paste_app and I'm really digging it. Great for code snippets, hex colors & links you frequently use.",
	},
	{
		name: "Diego Freniche Brito",
		role: "Developer Advocate",
		company: "Realm/MongoDB",
		text: "Using a clipboard manager has become second nature for me (and a necessity as developer). Have tried a bunch: @paste_app is the best by far. Instabuy. If you program and aren't using one of these, you're wasting time... Your time.",
	},
	{
		name: "Sammy Schuckert",
		role: "UX designer",
		company: "IBM",
		text: "I'm a heavy @paste_app user for 3 years. Paste is core to my everyday workflows. Even while writing this tweet I'm using it. It provides me with superpowers and makes me crazy efficient. Every time someone sees me using it they go like, \"Oh hey, what was that? I want that!\"",
	},
	{
		name: "Matthias Feit",
		role: "Musician, UX Designer, Dad",
		company: "",
		text: "Thanks to @paste_app, I was able to cut the time I would have spent on copying and pasting today by about 75%.",
	},
	{
		name: "Simon Sturmer",
		role: "Software Engineer",
		company: "Google",
		text: "@paste_app is my new favorite Mac App! I don't know how I went so long without it!",
	},
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
	<div className="bg-[#FFF5E6] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
		<div className="mb-4">
			<h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
			<p className="text-xs text-gray-500 uppercase tracking-wide font-medium mt-1">
				{review.role}
				{review.company && <br />}
				{review.company}
			</p>
		</div>
		<p className="text-gray-800 text-base leading-relaxed">
			{review.text}
		</p>
	</div>
);

export default function ExtendedReviews() {
	return (
		<section className="w-full relative flex flex-col overflow-hidden">
      <style>{`
        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0%); }
        }
        @keyframes scrollUp {
          from { transform: translateY(0%); }
          to { transform: translateY(-50%); }
        }
        .animate-scroll-down {
          animation: scrollDown 40s linear infinite;
        }
        .animate-scroll-up {
          animation: scrollUp 45s linear infinite;
        }
        .animate-scroll-down:hover, .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
			{/* Background Image covering the whole section */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: "url('/Bg-2.png')",
					backgroundSize: "cover",
					backgroundPosition: "center 99%",
					backgroundRepeat: "no-repeat",
				}}
			/>

            {/* Tilted Vectors Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="tilted-lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-25)">
                            <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#tilted-lines)" />
                </svg>
            </div>

			{/* Reviews Section */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-24 pb-20">
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
						Hear it from Insiders
					</h2>
					<p className="text-xl font-medium text-black">
						
					</p>
				</motion.div>

				<div className="relative">
					{/* Top Gradient Blur */}
					<div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white via-white/200 to-transparent z-20 pointer-events-none"></div>
					
					{/* Bottom Gradient Blur */}
					<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-orange-400 via-orange-500/200 to-transparent z-20 pointer-events-none"></div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[1000px] overflow-hidden mask-gradient">
					{/* Column 1 - Scroll Down */}
					<div className="relative h-full overflow-hidden">
						<div className="flex flex-col gap-6 animate-scroll-down">
							{[...reviews.slice(0, 3), ...reviews.slice(0, 3), ...reviews.slice(0, 3)].map((review, index) => (
								<ReviewCard key={`col1-${index}`} review={review} />
							))}
						</div>
					</div>

					{/* Column 2 - Scroll Up */}
					<div className="relative h-full overflow-hidden hidden md:block">
						<div className="flex flex-col gap-6 animate-scroll-up">
							{[...reviews.slice(3, 6), ...reviews.slice(3, 6), ...reviews.slice(3, 6)].map((review, index) => (
								<ReviewCard key={`col2-${index}`} review={review} />
							))}
						</div>
					</div>

					{/* Column 3 - Scroll Down */}
					<div className="relative h-full overflow-hidden hidden lg:block">
						<div className="flex flex-col gap-6 animate-scroll-down" style={{ animationDuration: '42s' }}>
							{[...reviews.slice(6, 9), ...reviews.slice(6, 9), ...reviews.slice(6, 9)].map((review, index) => (
								<ReviewCard key={`col3-${index}`} review={review} />
							))}
						</div>
					</div>
				</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="relative z-10 w-full h-[600px] flex flex-col items-center justify-center mt-30">
				{/* Content */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center px-4 max-w-5xl mx-auto mb-20"
				>
					<h2 className="text-5xl md:text-7xl font-bold text-[#FFF5E6] mb-12 leading-tight tracking-tight">
						<span className="relative inline-block mx-2">
							<span className="absolute inset-0 blur-2xl bg-gradient-to-r from-white/40 to-transparent rounded-full opacity-50"></span>
							<span className="relative drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Life</span>
						</span>
						<span className="relative inline-block mx-2">
							<span className="absolute inset-0 blur-2xl bg-gradient-to-r from-white/40 to-transparent rounded-full opacity-50"></span>
							<span className="relative drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">rewards</span>
						</span>
						<span className="relative inline-block mx-2">
							<span className="absolute inset-0 blur-2xl bg-gradient-to-r from-white/40 to-transparent rounded-full opacity-50"></span>
							<span className="relative drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">action</span>
						</span>
						<br />
						<span className="relative inline-block mx-2">
							<span className="absolute inset-0 blur-2xl bg-gradient-to-r from-white/40 to-transparent rounded-full opacity-50"></span>
							<span className="relative drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">not</span>
						</span>
						<span className="relative inline-block mx-2">
							<span className="absolute inset-0 blur-2xl bg-gradient-to-r from-white/40 to-transparent rounded-full opacity-50"></span>
							<span className="relative drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">intelligence</span>
						</span>
					</h2>
					<motion.button
						whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="bg-white text-black px-16 py-5 rounded-full text-xl font-medium hover:bg-gray-50 transition-colors shadow-lg mb-40 w-auto min-w-[200px]"
					>
						Start for free
					</motion.button>
				</motion.div>

				{/* Bottom Text */}
				<div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none mt-14">
					<h1 className="text-[12vw] leading-[0.8] font-bold text-white tracking-tighter translate-y-[10%]">
						AgentMarketplace
					</h1>
				</div>
			</div>
		</section>
	);
}
