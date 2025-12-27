export function ProfileImage(props: { className?: string }) {
  return (
    <img
      src="/profilePic.avif"
      alt="Profile image"
      loading="lazy"
      className={`object-cover ${props.className}`}
    />
  );
}
