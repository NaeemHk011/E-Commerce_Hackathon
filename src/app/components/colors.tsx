const ColorCircles = () => {
    const colors = [
      "bg-blue-500", 
      "bg-green-500", 
      "bg-orange-500", 
      "bg-gray-800", 
    ];
  
    return (
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-5 h-5 ${color} rounded-full cursor-pointer`}
          ></div>
        ))}
      </div>
    );
  };
  
  export default ColorCircles;
  