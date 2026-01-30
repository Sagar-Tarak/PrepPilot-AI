import React, { useState } from "react";
import {
  Folder,
  File,
  Circle,
  Terminal as TerminalIcon,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeFile, setActiveFile] = useState("server.js");
  const [expandedFolders, setExpandedFolders] = useState([
    "server",
    "server/middleware",
    "server/ai",
    "server/utils",
  ]);

  const toggleFolder = (folder) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder],
    );
  };

  const techInfo = {
    mongoose: {
      name: "MongoDB",
      desc: "NoSQL document database with flexible schemas and powerful aggregation pipeline.",
    },
    express: {
      name: "Express.js",
      desc: "Fast, unopinionated web framework for Node.js with robust middleware ecosystem.",
    },
    jwt: {
      name: "JSON Web Tokens",
      desc: "Secure method for transmitting information between parties as a JSON object.",
    },
    gemini: {
      name: "Google Gemini AI",
      desc: "Advanced generative AI for intelligent interview feedback and analysis.",
    },
  };

  const files = {
    "server.js": {
      lines: 16,
      content: (
        <>
          <div className="text-slate-500">
            // server.js - MERN Stack Configuration
          </div>
          <div className="mt-2">
            <span className="text-purple-600">const</span>{" "}
            <span
              className="relative cursor-help"
              onMouseEnter={() => setHoveredTech("express")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <span className="text-blue-600 border-b-2 border-dotted border-blue-300">
                express
              </span>
              {hoveredTech === "express" && (
                <div className="absolute left-0 top-6 z-50 w-80 bg-slate-900 text-white p-4 rounded-lg shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="font-bold text-sm mb-1">
                    {techInfo.express.name}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {techInfo.express.desc}
                  </div>
                  <div className="mt-2 text-[10px] text-slate-500">
                    npm install express
                  </div>
                </div>
              )}
            </span>
            {" = "}
            <span className="text-orange-600">require</span>(
            <span className="text-green-600">'express'</span>);
          </div>

          <div>
            <span className="text-purple-600">const</span>{" "}
            <span
              className="relative cursor-help"
              onMouseEnter={() => setHoveredTech("mongoose")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <span className="text-blue-600 border-b-2 border-dotted border-green-300">
                mongoose
              </span>
              {hoveredTech === "mongoose" && (
                <div className="absolute left-0 top-6 z-50 w-80 bg-slate-900 text-white p-4 rounded-lg shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="font-bold text-sm mb-1">
                    {techInfo.mongoose.name}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {techInfo.mongoose.desc}
                  </div>
                  <div className="mt-2 text-[10px] text-slate-500">
                    npm install mongoose
                  </div>
                </div>
              )}
            </span>
            {" = "}
            <span className="text-orange-600">require</span>(
            <span className="text-green-600">'mongoose'</span>);
          </div>

          <div className="mt-4 text-slate-500">// Security & Performance</div>
          <div>
            app.<span className="text-yellow-600">use</span>(
            <span className="text-orange-600">helmet</span>());
          </div>
          <div>
            app.<span className="text-yellow-600">use</span>(
            <span className="text-orange-600">cors</span>());
          </div>
          <div>
            app.<span className="text-yellow-600">use</span>(
            <span className="text-orange-600">morgan</span>(
            <span className="text-green-600">'dev'</span>));
          </div>

          <div className="mt-4 text-slate-500">// Start server</div>
          <div>
            app.<span className="text-yellow-600">listen</span>(
            <span className="text-orange-500">5000</span>, () {"=>"} console.
            <span className="text-yellow-600">log</span>(
            <span className="text-green-600">'🚀 Server ready'</span>));
          </div>
        </>
      ),
    },
    "auth.middleware.js": {
      lines: 22,
      content: (
        <>
          <div className="text-slate-500">
            // auth.middleware.js - JWT Authentication
          </div>
          <div className="mt-2">
            <span className="text-purple-600">import</span> jwt{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'jsonwebtoken'</span>;
          </div>
          <div>
            <span className="text-purple-600">import</span> bcrypt{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'bcryptjs'</span>;
          </div>
          <div className="text-slate-500">
            // Because storing passwords in plain text is so 2005
          </div>

          <div className="mt-4">
            <span className="text-purple-600">export</span>{" "}
            <span className="text-purple-600">const</span> hashPassword ={" "}
            <span className="text-purple-600">async</span> (pwd) {"=>"} {"{"}
          </div>
          <div className="ml-4 text-slate-500">
            // 10 rounds of salt. Not the seasoning kind.
          </div>
          <div className="ml-4">
            <span className="text-purple-600">const</span> salt ={" "}
            <span className="text-purple-600">await</span> bcrypt.
            <span className="text-yellow-600">genSalt</span>(
            <span className="text-orange-500">10</span>);
          </div>
          <div className="ml-4">
            <span className="text-purple-600">return</span>{" "}
            <span className="text-purple-600">await</span> bcrypt.
            <span className="text-yellow-600">hash</span>(pwd, salt);
          </div>
          <div>{"};"}</div>

          <div className="mt-4">
            <span className="text-purple-600">export</span>{" "}
            <span className="text-purple-600">const</span> verifyToken = (req,
            res, next) {"=>"} {"{"}
          </div>
          <div className="ml-4 text-slate-500">// The bouncer of our API</div>
          <div className="ml-4">
            <span className="text-purple-600">const</span> token = req.headers[
            <span className="text-green-600">'authorization'</span>];
          </div>
          <div className="ml-4">
            <span className="text-purple-600">if</span> (!token){" "}
            <span className="text-purple-600">return</span> res.
            <span className="text-yellow-600">status</span>(
            <span className="text-orange-500">401</span>).
            <span className="text-yellow-600">json</span>({"{"}
            {"}"});
          </div>
          <div className="ml-4 text-slate-500">
            // JWT: Just Working Tokens 🎫
          </div>
          <div className="ml-4">
            jwt.<span className="text-yellow-600">verify</span>(token,
            process.env.SECRET);
          </div>
          <div>{"};"}</div>
        </>
      ),
    },
    "gemini-ai.js": {
      lines: 24,
      content: (
        <>
          <div className="text-slate-500">
            // gemini-ai.js - Google Gemini AI Integration
          </div>
          <div className="mt-2">
            <span className="text-purple-600">import</span> {"{"}{" "}
            GoogleGenerativeAI {"}"}{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'@google/generative-ai'</span>;
          </div>
          <div className="text-slate-500">
            // The brain behind the interview magic ✨
          </div>

          <div className="mt-4">
            <span className="text-purple-600">const</span> genAI ={" "}
            <span className="text-purple-600">new</span>{" "}
            <span className="text-blue-600">GoogleGenerativeAI</span>
            (process.env.API_KEY);
          </div>
          <div>
            <span className="text-purple-600">const</span> model = genAI.
            <span className="text-yellow-600">getGenerativeModel</span>({"{"}
          </div>
          <div className="ml-4">
            model: <span className="text-green-600">"gemini-1.5-flash"</span>
          </div>
          <div>{"});"}</div>

          <div className="mt-4">
            <span className="text-purple-600">export</span>{" "}
            <span className="text-purple-600">const</span> analyzeCodingAnswer ={" "}
            <span className="text-purple-600">async</span> (code) {"=>"} {"{"}
          </div>
          <div className="ml-4 text-slate-500">
            // AI judges your code. No pressure 😅
          </div>
          <div className="ml-4">
            <span className="text-purple-600">const</span> prompt ={" "}
            <span className="text-green-600">`Analyze this code: $</span>
            {"{"}code{"}"}`;
          </div>
          <div className="ml-4">
            <span className="text-purple-600">const</span> result ={" "}
            <span className="text-purple-600">await</span> model.
            <span className="text-yellow-600">generateContent</span>(prompt);
          </div>
          <div className="ml-4 text-slate-500">
            // Returns feedback faster than your tech lead
          </div>
          <div className="ml-4">
            <span className="text-purple-600">return</span> result.response.
            <span className="text-yellow-600">text</span>();
          </div>
          <div>{"};"}</div>

          <div className="mt-4 text-slate-500">
            // Powered by Google. Worried by OpenAI. 🤖
          </div>
        </>
      ),
    },
    "validation.js": {
      lines: 20,
      content: (
        <>
          <div className="text-slate-500">
            // validation.js - Zod Schema Validation
          </div>
          <div className="mt-2">
            <span className="text-purple-600">import</span> {"{"} z {"}"}{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'zod'</span>;
          </div>
          <div className="text-slate-500">
            // TypeScript's cool cousin for runtime validation
          </div>

          <div className="mt-4">
            <span className="text-purple-600">export</span>{" "}
            <span className="text-purple-600">const</span> UserSchema = z.
            <span className="text-yellow-600">object</span>({"{"}
          </div>
          <div className="ml-4">
            email: z.<span className="text-yellow-600">string</span>().
            <span className="text-yellow-600">email</span>(),
          </div>
          <div className="ml-4">
            password: z.<span className="text-yellow-600">string</span>().
            <span className="text-yellow-600">min</span>(
            <span className="text-orange-500">8</span>),
          </div>
          <div className="ml-4 text-slate-500">
            // Because "password123" is still a crime
          </div>
          <div className="ml-4">
            role: z.<span className="text-yellow-600">enum</span>([
            <span className="text-green-600">'user'</span>,{" "}
            <span className="text-green-600">'admin'</span>])
          </div>
          <div>{"});"}</div>

          <div className="mt-4">
            <span className="text-purple-600">export</span>{" "}
            <span className="text-purple-600">const</span> validate = (schema){" "}
            {"=>"} (req, res, next) {"=>"} {"{"}
          </div>
          <div className="ml-4">
            <span className="text-purple-600">try</span> {"{"}
          </div>
          <div className="ml-8">
            schema.<span className="text-yellow-600">parse</span>(req.body);
          </div>
          <div className="ml-8">
            <span className="text-yellow-600">next</span>();
          </div>
          <div className="ml-4">
            {"}"} <span className="text-purple-600">catch</span> (err) {"{"}
          </div>
          <div className="ml-8 text-slate-500">
            // Zod: "No bad data shall pass!" 🧙‍♂️
          </div>
          <div className="ml-8">
            res.<span className="text-yellow-600">status</span>(
            <span className="text-orange-500">400</span>).
            <span className="text-yellow-600">json</span>(err);
          </div>
          <div className="ml-4">{"}"}</div>
          <div>{"};"}</div>
        </>
      ),
    },
    "security.js": {
      lines: 18,
      content: (
        <>
          <div className="text-slate-500">
            // security.js - Helmet + Rate Limiting
          </div>
          <div className="mt-2">
            <span className="text-purple-600">import</span> helmet{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'helmet'</span>;
          </div>
          <div>
            <span className="text-purple-600">import</span> rateLimit{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'express-rate-limit'</span>;
          </div>
          <div className="text-slate-500">
            // Because hackers don't take coffee breaks ☕
          </div>

          <div className="mt-4 text-slate-500">
            // Helmet: 14 security headers in one middleware
          </div>
          <div>
            <span className="text-purple-600">export</span>{" "}
            <span className="text-purple-600">const</span> securityHeaders ={" "}
            <span className="text-yellow-600">helmet</span>({"{"}
          </div>
          <div className="ml-4">
            contentSecurityPolicy: <span className="text-purple-600">true</span>
            ,
          </div>
          <div className="ml-4 text-slate-500">// XSS? Not on my watch.</div>
          <div>{"});"}</div>

          <div className="mt-4 text-slate-500">
            // Rate Limiter: "Slow down there, cowboy"
          </div>
          <div>
            <span className="text-purple-600">export</span>{" "}
            <span className="text-purple-600">const</span> limiter ={" "}
            <span className="text-yellow-600">rateLimit</span>({"{"}
          </div>
          <div className="ml-4">
            windowMs: <span className="text-orange-500">15</span> *{" "}
            <span className="text-orange-500">60</span> *{" "}
            <span className="text-orange-500">1000</span>,
          </div>
          <div className="ml-4">
            max: <span className="text-orange-500">100</span>,{" "}
            <span className="text-slate-500">// 100 requests per 15min</span>
          </div>
          <div className="ml-4 text-slate-500">
            // DDoS attackers hate this one trick
          </div>
          <div>{"});"}</div>
        </>
      ),
    },
    "file-upload.js": {
      lines: 21,
      content: (
        <>
          <div className="text-slate-500">
            // file-upload.js - Multer + PDF Parser
          </div>
          <div className="mt-2">
            <span className="text-purple-600">import</span> multer{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'multer'</span>;
          </div>
          <div>
            <span className="text-purple-600">import</span> pdfParse{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'pdf-parse'</span>;
          </div>
          <div className="text-slate-500">
            // Resume parser: Because humans lie, PDFs don't 📄
          </div>

          <div className="mt-4">
            <span className="text-purple-600">const</span> storage = multer.
            <span className="text-yellow-600">diskStorage</span>({"{"}
          </div>
          <div className="ml-4">
            destination: <span className="text-green-600">'./uploads/'</span>,
          </div>
          <div className="ml-4">
            filename: (req, file, cb) {"=>"} {"{"}
          </div>
          <div className="ml-8 text-slate-500">
            // Timestamps: Making filenames unique since 1970
          </div>
          <div className="ml-8">
            cb(<span className="text-purple-600">null</span>, Date.
            <span className="text-yellow-600">now</span>() +{" "}
            <span className="text-green-600">'-'</span> + file.originalname);
          </div>
          <div className="ml-4">{"}"}</div>
          <div>{"});"}</div>

          <div className="mt-4">
            <span className="text-purple-600">export</span>{" "}
            <span className="text-purple-600">const</span> parseResume ={" "}
            <span className="text-purple-600">async</span> (buffer) {"=>"} {"{"}
          </div>
          <div className="ml-4">
            <span className="text-purple-600">const</span> data ={" "}
            <span className="text-purple-600">await</span>{" "}
            <span className="text-yellow-600">pdfParse</span>(buffer);
          </div>
          <div className="ml-4 text-slate-500">
            // Extract text from PDF faster than you can say "recruiter"
          </div>
          <div className="ml-4">
            <span className="text-purple-600">return</span> data.text;
          </div>
          <div>{"};"}</div>
        </>
      ),
    },
    "bugs.js": {
      lines: 17,
      content: (
        <>
          <div className="text-slate-500">
            // bugs.js - Production Issues (Don't ask)
          </div>
          <div className="mt-2 text-red-500">
            // TODO: Fix this before demo day
          </div>
          <div className="text-slate-500">
            // Narrator: They did not fix it before demo day
          </div>
          <div className="mt-2">
            <span className="text-purple-600">const</span> fixBug = () {"=>"}{" "}
            {"{"}
          </div>
          <div className="ml-4 text-slate-500">
            // It works on my machine ¯\_(ツ)_/¯
          </div>
          <div className="ml-4">
            <span className="text-purple-600">try</span> {"{"}
          </div>
          <div className="ml-8">
            database.<span className="text-yellow-600">connect</span>();
          </div>
          <div className="ml-4">
            {"}"} <span className="text-purple-600">catch</span> (err) {"{"}
          </div>
          <div className="ml-8">
            console.<span className="text-yellow-600">log</span>(
            <span className="text-green-600">'ERROR:'</span>, err);
          </div>
          <div className="ml-8 text-slate-500">// Ship it anyway 🚀</div>
          <div className="ml-4">{"}"}</div>
          <div>{"}"};</div>

          <div className="mt-4 text-slate-500">
            // "Just restart the server" - every dev ever
          </div>
          <div className="text-slate-500">
            // Uptime: 2 weeks, 3 days, 4 crashes, 0 regrets
          </div>
        </>
      ),
    },
    "mongodb-memes.js": {
      lines: 15,
      content: (
        <>
          <div className="text-slate-500">
            // mongodb-memes.js - NoSQL = No Schema? No Problem!
          </div>
          <div className="mt-2">
            <span className="text-purple-600">const</span> UserSchema ={" "}
            <span className="text-purple-600">new</span> Schema({"{"}
          </div>
          <div className="ml-4">name: String,</div>
          <div className="ml-4">email: String,</div>
          <div className="ml-4 text-slate-500">// Added by intern at 3am</div>
          <div className="ml-4">pizzaToppings: [String],</div>
          <div className="ml-4 text-slate-500">
            // Schema? More like... suggestions
          </div>
          <div className="ml-4">
            randomField: <span className="text-green-600">"YOLO"</span>,
          </div>
          <div>{"});"}</div>

          <div className="mt-4 text-slate-500">
            // MongoDB: Where your schema is optional
          </div>
          <div className="text-slate-500">
            // SQL devs: *confused screaming*
          </div>
          <div className="mt-2 text-orange-500">
            // "It's web scale!" - Famous last words
          </div>
        </>
      ),
    },
    "react-struggles.jsx": {
      lines: 18,
      content: (
        <>
          <div className="text-slate-500">
            // react-struggles.jsx - useState is a lifestyle
          </div>
          <div className="mt-2">
            <span className="text-purple-600">import</span> React, {"{"}{" "}
            useState, useEffect {"}"}{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'react'</span>;
          </div>
          <div className="text-slate-500">
            // Also imported: anxiety, coffee, stackoverflow
          </div>

          <div className="mt-4">
            <span className="text-purple-600">const</span>{" "}
            <span className="text-blue-600">App</span> = () {"=>"} {"{"}
          </div>
          <div className="ml-4">
            <span className="text-purple-600">const</span> [count, setCount] ={" "}
            <span className="text-orange-600">useState</span>(
            <span className="text-orange-500">0</span>);
          </div>
          <div className="ml-4 text-slate-500">
            // This will re-render 47 times. No one knows why.
          </div>

          <div className="ml-4 mt-2">
            <span className="text-orange-600">useEffect</span>(() {"=>"} {"{"}
          </div>
          <div className="ml-8 text-slate-500">
            // Runs on mount, unmount, every full moon...
          </div>
          <div className="ml-8">
            console.<span className="text-yellow-600">log</span>(
            <span className="text-green-600">'Why again?'</span>);
          </div>
          <div className="ml-4">
            {"}"}, []);{" "}
            <span className="text-slate-500">// The sacred empty array</span>
          </div>

          <div className="ml-4 mt-2 text-slate-500">
            // 200 lines of Tailwind incoming...
          </div>
          <div className="ml-4">{"};"}</div>
        </>
      ),
    },
  };

  const fileStructure = [
    { type: "file", name: "server.js", path: "server.js" },
    { type: "file", name: "bugs.js", path: "bugs.js" },
    {
      type: "folder",
      name: "server",
      path: "server",
      children: [
        {
          type: "folder",
          name: "middleware",
          path: "server/middleware",
          children: [
            {
              type: "file",
              name: "auth.middleware.js",
              path: "auth.middleware.js",
            },
            { type: "file", name: "security.js", path: "security.js" },
          ],
        },
        {
          type: "folder",
          name: "ai",
          path: "server/ai",
          children: [
            { type: "file", name: "gemini-ai.js", path: "gemini-ai.js" },
          ],
        },
        {
          type: "folder",
          name: "utils",
          path: "server/utils",
          children: [
            { type: "file", name: "validation.js", path: "validation.js" },
            { type: "file", name: "file-upload.js", path: "file-upload.js" },
          ],
        },
      ],
    },
    { type: "file", name: "mongodb-memes.js", path: "mongodb-memes.js" },
    {
      type: "folder",
      name: "client",
      path: "client",
      children: [
        {
          type: "file",
          name: "react-struggles.jsx",
          path: "react-struggles.jsx",
        },
      ],
    },
  ];

  const renderFileTree = (items, level = 0) => {
    return items.map((item) => {
      if (item.type === "folder") {
        const isExpanded = expandedFolders.includes(item.path);
        return (
          <div key={item.path}>
            <button
              onClick={() => toggleFolder(item.path)}
              className="flex items-center gap-2 w-full text-left hover:bg-orange-50 px-2 py-1 rounded transition-colors text-slate-600"
              style={{ paddingLeft: `${(level + 1) * 16}px` }}
            >
              {isExpanded ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
              <Folder className="w-3 h-3 text-blue-500" />
              <span className="text-xs">{item.name}</span>
            </button>
            {isExpanded && item.children && (
              <div>{renderFileTree(item.children, level + 1)}</div>
            )}
          </div>
        );
      } else {
        return (
          <button
            key={item.path}
            onClick={() => setActiveFile(item.path)}
            className={`flex items-center gap-2 w-full text-left hover:bg-orange-50 px-2 py-1 rounded transition-colors ${
              activeFile === item.path
                ? "bg-orange-100 text-orange-700 font-bold shadow-sm"
                : "text-slate-500"
            }`}
            style={{ paddingLeft: `${(level + 2) * 16}px` }}
          >
            <File className="w-3 h-3" />
            <span className="text-xs">{item.name}</span>
          </button>
        );
      }
    });
  };

  return (
    <section
      id="architecture"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Blueprint Architecture Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Large Decorative Text */}
        <div className="absolute top-1/4 -left-12 text-[14rem] font-black text-orange-500/[0.03] leading-none uppercase rotate-90 tracking-tighter">
          Architecture
        </div>
        <div className="absolute bottom-0 -right-20 text-[12rem] font-black text-orange-500/[0.03] leading-none uppercase tracking-tighter">
          Stack
        </div>

        {/* Blueprint Lines */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(#fed7aa 1px, transparent 1px), linear-gradient(90deg, #fed7aa 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        ></div>

        {/* Technical Corner Markers */}
        <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-orange-200/50"></div>
        <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-orange-200/50"></div>
        <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-orange-200/50"></div>
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-orange-200/50"></div>

        {/* Framing Lines that 'point' to the window */}
        <div className="hidden 2xl:block">
          <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-orange-100 to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-orange-100 to-transparent"></div>
          <div className="absolute top-0 left-1/2 w-px h-1/4 bg-gradient-to-b from-transparent via-orange-100 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 w-px h-1/4 bg-gradient-to-t from-transparent via-orange-100 to-transparent"></div>
        </div>

        {/* Technical Metadata Snippets */}
        <div className="absolute top-20 left-20 font-mono text-[10px] text-orange-300 uppercase tracking-[0.2em] hidden xl:block">
          Ref: PP-AI_SYS-V1.0
        </div>
        <div className="absolute bottom-20 right-20 font-mono text-[10px] text-orange-300 uppercase tracking-[0.2em] hidden xl:block text-right">
          Coord: 34.22"N / 55.10"E
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            The Architecture of <span className="text-orange-600">Clarity</span>
          </h2>
          <p className="text-slate-600 font-mono text-sm">
            // Building the straight line through technical excellence
          </p>
        </div>

        {/* IDE Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-100 ring-1 ring-orange-500/10">
          {/* Window Controls */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 px-4 py-3 border-b border-orange-200 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs font-semibold text-slate-600">
              {activeFile} — PrepPilot AI
            </div>
            <div className="w-12"></div>
          </div>

          {/* File Tabs */}
          <div className="bg-orange-50/30 border-b border-orange-200 flex items-center overflow-x-auto">
            {Object.keys(files)
              .slice(0, 5)
              .map((fileName) => (
                <button
                  key={fileName}
                  onClick={() => setActiveFile(fileName)}
                  className={`group flex items-center gap-2 px-4 py-2 text-xs font-mono border-r border-orange-200 hover:bg-white transition-colors whitespace-nowrap ${
                    activeFile === fileName
                      ? "bg-white text-slate-900 border-b-2 border-b-orange-500 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <File className="w-3 h-3" />
                  <span>{fileName}</span>
                  {activeFile === fileName && (
                    <X className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
          </div>

          {/* IDE Content */}
          <div className="flex h-[600px]">
            {/* Sidebar - File Explorer */}
            <div className="w-64 bg-orange-50/20 border-r border-orange-200/50 p-4 overflow-y-auto hidden md:block">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Explorer
              </div>

              {/* Project Structure */}
              <div className="space-y-1 font-mono text-sm">
                <div className="flex items-center gap-2 text-slate-600 mb-2">
                  <Folder className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold">preppilot-ai</span>
                </div>

                {renderFileTree(fileStructure)}
              </div>
            </div>

            {/* Main Editor */}
            <div className="flex-1 bg-white relative border-r border-orange-100">
              <div className="p-6 font-mono text-sm leading-relaxed overflow-auto h-full">
                {/* Line numbers and code */}
                <div className="flex gap-4">
                  {/* Line numbers */}
                  <div className="text-slate-400 select-none text-right">
                    {Array.from(
                      { length: files[activeFile].lines },
                      (_, i) => i + 1,
                    ).map((n) => (
                      <div key={n} className="leading-relaxed">
                        {n}
                      </div>
                    ))}
                  </div>

                  {/* Code content */}
                  <div className="flex-1">
                    <div className="leading-relaxed text-slate-800">
                      {files[activeFile].content}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-orange-600 px-4 py-1 text-xs text-white font-mono flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Circle className="w-2 h-2 fill-white" />
                    <span>JavaScript</span>
                  </div>
                  <div>UTF-8</div>
                  <div>Ln {files[activeFile].lines}, Col 1</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span>MERN Stack Ready</span>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Documentation/Metrics */}
            <div className="w-72 bg-orange-50/10 p-4 border-l border-orange-200 hidden xl:block overflow-y-auto">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                Documentation
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-orange-100 p-3 rounded-lg shadow-sm">
                  <h4 className="text-xs font-bold text-slate-800 mb-2 uppercase flex items-center gap-2">
                    <div className="w-1.5 h-3 bg-orange-500 rounded-full"></div>
                    Active Stack
                  </h4>
                  <div className="text-[11px] text-slate-600 leading-normal">
                    You are currently viewing the core implementation of{" "}
                    <span className="font-bold text-orange-600">
                      {activeFile}
                    </span>
                    .
                  </div>
                </div>

                <div className="bg-white border border-orange-100 p-3 rounded-lg shadow-sm">
                  <h4 className="text-xs font-bold text-slate-800 mb-2 uppercase flex items-center gap-2">
                    <div className="w-1.5 h-3 bg-green-500 rounded-full"></div>
                    System Indicators
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500">Adaptive Engine</span>
                      <span className="font-mono text-green-600">Active</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[100%] animate-pulse"></div>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500">Feedback Loop</span>
                      <span className="font-mono text-green-600">Locked</span>
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Dependencies
                  </h4>
                  <div className="space-y-2">
                    {["express", "mongoose", "google-ai", "zod"].map((dep) => (
                      <div
                        key={dep}
                        className="flex items-center gap-2 text-[10px] text-slate-500 bg-orange-50/50 px-2 py-1 rounded border border-orange-100/50"
                      >
                        <code>{dep}</code>
                        <span className="text-orange-300 ml-auto">latest</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="bg-[#1e1e1e] text-slate-300 p-4 font-mono text-xs border-t border-slate-700">
            <div className="flex items-center gap-2 mb-3 text-slate-500">
              <TerminalIcon className="w-3 h-3" />
              <span>TERMINAL</span>
            </div>
            <div className="space-y-1">
              <div className="text-green-400">$ npm run dev</div>
              <div className="text-slate-400">[server] ✓ MongoDB connected</div>
              <div className="text-slate-400">
                [server] ✓ Gemini AI initialized
              </div>
              <div className="text-slate-400">
                [server] ✓ Security middleware loaded
              </div>
              <div className="text-blue-400">
                [client] React app at http://localhost:3000
              </div>
              <div className="text-yellow-400">
                [warning] node_modules weighs 450MB 🤡
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-orange-400">➜</span>
                <span className="text-cyan-400">~/preppilot-ai</span>
                <span className="w-2 h-4 bg-slate-500 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
