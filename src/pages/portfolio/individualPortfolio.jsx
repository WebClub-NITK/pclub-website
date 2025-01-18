import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, Mail, Instagram, Globe } from "lucide-react";
import PhotoGrid from "../../components/portfolio/PhotoGrid";
import UserCard from "../../components/portfolio/UserCard";

const IndividualPortfoli = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const photographer =  {
    id: id,
    name: "John Smith",
    role: "Portrait Photographer",
    bio: "Specializing in capturing genuine emotions and authentic moments through portrait photography.",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400",
    mail:"John@gmai.com",
    instagram:"johnsmith",
    photos: [
      {
        id: "1",
        title: "Urban Portrait",
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        description: "Street photography in downtown"
      },
      {
        id: "2",
        title: "Natural Light",
        url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        description: "Portrait session using natural lighting"
      }
    ]
  }

  if (!photographer) {
    return <div>Photographer not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Team
        </button>

        {/* Section 1 & 2: Photographer Info */}
        <UserCard avatar={photographer.avatar} role={photographer.role} name={photographer.name} bio={photographer.bio} mail={photographer.mail} instagram={photographer.instagram} />
       

        {/* Section 3: Photo Grid */}
        <PhotoGrid photographer={photographer} />
        
      </div>
    </div>
  );
};

export default IndividualPortfoli;
