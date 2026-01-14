"use client";

import React from "react";
import { motion } from "framer-motion";

const reviews = [
	{
		name: "Alexander Akers",
		role: "Senior iOS Engineer",
		company: "Apple",
		image: "https://i.pravatar.cc/150?u=AlexanderAkers",
		text: "I get worried when I use a computer without @paste_app. What if there's something important on the clipboard? It's like how you can \"hold\" a piece in Tetris but you have to remember what it is.",
	},
	{
		name: "João Cunha",
		role: "Senior Product Manager",
		company: "Nubank",
		image: "https://i.pravatar.cc/150?u=JoaoCunha",
		text: "Few things have had as much impact on my Mac workflow as @paste_app. It may look irrelevant, but think of how many times you copy/paste things over the course of a day — Paste makes this process a gazillion times better.",
	},
	{
		name: "Jonathan Z. White",
		role: "Designer & Developer",
		company: "Airbnb",
		image: "https://i.pravatar.cc/150?u=JonathanZWhite",
		text: "I've been using an app called @paste_app and it's almost hilarious how much of a workflow improvement it is.",
	},
	{
		name: "Chris Messina",
		role: "Hashtag Inventor",
		company: "",
		image: "https://i.pravatar.cc/150?u=ChrisMessina",
		text: "This is a must-have Mac app for me. I use it dozens if not hundreds of times a day. So useful!",
	},
	{
		name: "Kristen Wright",
		role: "Marketing",
		company: "Day One Journal",
		image: "https://i.pravatar.cc/150?u=KristenWright",
		text: "Finally bought @paste_app and I'm really digging it. Great for code snippets, hex colors & links you frequently use.",
	},
	{
		name: "Diego Freniche Brito",
		role: "Developer Advocate",
		company: "Realm/MongoDB",
		image: "https://i.pravatar.cc/150?u=DiegoFrenicheBrito",
		text: "Using a clipboard manager has become second nature for me (and a necessity as developer). Have tried a bunch: @paste_app is the best by far. Instabuy. If you program and aren't using one of these, you're wasting time... Your time.",
	},
	{
		name: "Sammy Schuckert",
		role: "UX designer",
		company: "IBM",
		image: "https://i.pravatar.cc/150?u=SammySchuckert",
		text: "I'm a heavy @paste_app user for 3 years. Paste is core to my everyday workflows. Even while writing this tweet I'm using it. It provides me with superpowers and makes me crazy efficient. Every time someone sees me using it they go like, \"Oh hey, what was that? I want that!\"",
	},
	{
		name: "Matthias Feit",
		role: "Musician, UX Designer, Dad",
		company: "",
		image: "https://i.pravatar.cc/150?u=MatthiasFeit",
		text: "Thanks to @paste_app, I was able to cut the time I would have spent on copying and pasting today by about 75%.",
	},
	{
		name: "Simon Sturmer",
		role: "Software Engineer",
		company: "Google",
		image: "https://i.pravatar.cc/150?u=SimonSturmer",
		text: "@paste_app is my new favorite Mac App! I don't know how I went so long without it!",
	},
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
	<div className="bg-gradient-to-br from-white/40 to-white/10 backdrop-filter backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
		<div className="flex items-start gap-4 mb-4">
			<img 
				src={review.image} 
				alt={review.name} 
				className="w-12 h-12 rounded-full object-cover shrink-0 bg-white/20"
			/>
			<div>
				<h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
				<p className="text-xs text-gray-600 uppercase tracking-wide font-medium mt-1">
					{review.role}
					{review.company && <br />}
					{review.company}
				</p>
			</div>
		</div>
		<p className="text-gray-800 text-base leading-relaxed font-medium">
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
			
			{/* Creative Background for Reviews Section - Full Width */}
			<div className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2">
				{/* Base Gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF5F0] to-[#FFE4D6]"></div>
				
				{/* Floating Gradient Orbs */}
				<div className="absolute top-[5%] left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-pink-300/40 via-rose-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-orange-200/30 via-peach-100/20 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute top-[50%] left-[5%] w-[350px] h-[350px] bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute top-[40%] right-[15%] w-[300px] h-[300px] bg-gradient-to-br from-amber-100/40 to-transparent rounded-full blur-2xl"></div>
				<div className="absolute bottom-[30%] left-[30%] w-[450px] h-[450px] bg-gradient-to-br from-rose-100/30 via-pink-50/20 to-transparent rounded-full blur-3xl"></div>
				
				{/* Decorative Mesh Grid */}
				<svg className="absolute inset-0 w-full h-full opacity-[0.03]" width="100%" height="100%">
					<defs>
						<pattern id="reviews-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
							<path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F472B6" strokeWidth="1" />
						</pattern>
					</defs>
					<rect fill="url(#reviews-grid)" width="100%" height="100%" />
				</svg>
				
				{/* Decorative Floating Shapes */}
				<div className="absolute top-[15%] left-[20%] w-20 h-20 border-2 border-pink-200/30 rounded-full"></div>
				<div className="absolute top-[25%] right-[25%] w-16 h-16 border-2 border-orange-200/30 rounded-full"></div>
				<div className="absolute top-[60%] left-[15%] w-12 h-12 border-2 border-rose-200/30 rounded-full"></div>
				<div className="absolute top-[45%] right-[10%] w-24 h-24 border-2 border-pink-100/30 rounded-full"></div>
				
				{/* Subtle Curved Lines */}
				<svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
					<path d="M0,200 Q300,100 600,200 T1200,200" fill="none" stroke="url(#reviewCurve)" strokeWidth="2" />
					<path d="M0,400 Q300,300 600,400 T1200,400" fill="none" stroke="url(#reviewCurve)" strokeWidth="1.5" />
					<path d="M0,600 Q300,500 600,600 T1200,600" fill="none" stroke="url(#reviewCurve)" strokeWidth="1" />
					<defs>
						<linearGradient id="reviewCurve" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#F472B6" stopOpacity="0.5" />
							<stop offset="50%" stopColor="#FB923C" stopOpacity="0.3" />
							<stop offset="100%" stopColor="#FBBF24" stopOpacity="0.2" />
						</linearGradient>
					</defs>
				</svg>
			</div>

			{/* Background Image covering the CTA section only */}
			<div
				className="absolute bottom-0 left-0 right-0 h-[700px] z-0"
				style={{
					backgroundImage: "url('/Bg-4.png')",
					backgroundSize: "cover",
					backgroundPosition: "center 75%",
					backgroundRepeat: "no-repeat",
				}}
			/>

            {/* Tilted Vectors Background for CTA */}
            <div className="absolute bottom-0 left-0 right-0 h-[700px] z-0 pointer-events-none overflow-hidden">
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
			<div className="relative z-10 w-full px-4 pt-24 pb-20">
				<div className="max-w-7xl mx-auto">
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-orange-200 mb-4 tracking-tight">
						Hear it from Insiders
					</h2>
					<p className="text-xl font-medium text-black">
						
					</p>
				</motion.div>

				<div className="relative">
					{/* Top Gradient Blur */}
					<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/50 to-transparent z-20 pointer-events-none"></div>
					
					{/* Bottom Gradient Blur */}
					<div 
						className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none bg-gradient-to-t from-white via-white/50 to-transparent backdrop-blur-md"
						style={{ maskImage: 'linear-gradient(to top, black, transparent)', WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }}
					></div>

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
