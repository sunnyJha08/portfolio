export function ProfileImage(props: { className?: string }) {
  return (
    <img
      src="public/profilePic.jpg"
      alt="Profile image"
      loading="lazy"
      className={`object-cover ${props.className}`}
    />
  );
}
