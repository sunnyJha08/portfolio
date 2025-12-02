import { Button } from "./ui/button";

function contact() {
  return <div>contact</div>;
}

function mailSendBox() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        Send
      </Button>
    </div>
  );
}
