import React, { useState } from "react";
import DashboardLayout from "../Shared/Layouts/DashboardLayout";
import ProfileHeader from "./components/ProfileHeader";
import IdentityCore from "./components/IdentityCore";
import CareerMatrix from "./components/CareerMatrix";
import SecurityAuth from "./components/SecurityAuth";
import { User, Cpu, Shield, Save } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("identity"); // identity, career, security
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.developer@preppilot.ai",
    role: "Frontend Developer",
    experience: 3,
    skills: ["React", "Node.js", "System Design"],
    bio: "Passionate about building scalable frontend architectures and mastering the technical interview process.",
  });

  const tabs = [
    { id: "identity", name: "Identity_Core", icon: User },
    { id: "career", name: "Career_Matrix", icon: Cpu },
    { id: "security", name: "Security_Auth", icon: Shield },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <ProfileHeader profile={profile} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Tabs */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 font-mono no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                            flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] transition-all whitespace-nowrap
                            ${
                              activeTab === tab.id
                                ? "bg-orange-600 text-white shadow-xl shadow-orange-950/20"
                                : "bg-white border border-slate-100 text-slate-400 hover:border-orange-200 hover:text-slate-600"
                            }
                        `}
              >
                <tab.icon size={16} />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content Stage */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-14 shadow-sm relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                {activeTab === "identity" && (
                  <IdentityCore profile={profile} setProfile={setProfile} />
                )}
                {activeTab === "career" && (
                  <CareerMatrix profile={profile} setProfile={setProfile} />
                )}
                {activeTab === "security" && <SecurityAuth />}
              </div>

              {/* Global Save Button */}
              <div className="mt-16 pt-10 border-t border-slate-50 flex justify-end">
                <button className="flex items-center gap-4 px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all shadow-xl shadow-orange-950/20 active:scale-95 group">
                  <Save
                    size={16}
                    strokeWidth={3}
                    className="group-hover:scale-125 transition-transform"
                  />
                  Update_Uplink
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
