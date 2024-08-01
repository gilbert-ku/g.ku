import Image from "next/image";

export default function Home() {
  return (
    // <main className=" home-pg flex min-h-screen flex-col items-center justify-between" >
    <main className=" home-pg  min-h-screen "> 
      <div className="flex justify-around bg-transparent">
        

        <Image 
        src="/profile-image.png"
        width={500}
        height={500}
        alt="profile image"
        
        />


      </div>
    </main>

    
  );
}
