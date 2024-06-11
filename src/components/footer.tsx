export default function Footer() {
  return (
    <footer className="flex flex-col items-start gap-1 bg-primary px-4 pt-2 text-white">
      <h4 className="font-semibold tracking-tight">Need a hand?</h4>
      <div className="flex w-full justify-between md:w-[350px]">
        <div className="flex flex-col">
          <p>email: </p>
          <p>phone:</p>
        </div>
        <div className="flex flex-col">
          <a href="mailto:m.bluth@example.com">
            golarz.filip@apk.uni.nieborow.com
          </a>
          <a href="tel:+123456789" className="text-end">
            48 123 456 789
          </a>
        </div>
      </div>
    </footer>
  );
}
