import React from "react";
import { ArrowLeft, Camera, Mail, Instagram, Globe } from "lucide-react";

const UserCard = ({ avatar, name, role, bio,mail,instagram }) => {
  const formattedName = name ? name.toLowerCase().replace(" ", "") : "unknown";

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      <div className="md:flex">
        {/* Left: Photographer Photo */}
        <div className="md:w-1/3 relative">
          <img
            src={avatar || "/placeholder-avatar.png"}
            alt={name || "Photographer"}
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>

        {/* Right: Photographer Details */}
        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
          {/* Photographer Header */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Camera className="h-8 w-8 text-gray-700" />
              <h1 className="text-4xl font-bold text-gray-900">
                {name || "Unknown Photographer"}
              </h1>
            </div>

            {/* Photographer Info */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {role || "Photographer"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {bio || "No bio available for this photographer."}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>{mail}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Instagram className="h-5 w-5" />
                  <span>@{instagram}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Globe className="h-5 w-5" />
                  <span>{formattedName}.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Make a Call
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-900 transition-colors">
              Download Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
