import profileImg from "../../assets/images/profilePic.jpg";
export function ProfileImage(props: { className?: string }) {
  return (
    <img
      src={profileImg}
      alt="Profile image"
      loading="lazy"
      className={`object-cover ${props.className}`}
    />
  );
}
