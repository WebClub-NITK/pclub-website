import React from 'react'

const PhotoGrid = ({photographer}) => {
  return (
    <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographer.photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full aspect-[4/3] object-cover transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-gray-200">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default PhotoGrid