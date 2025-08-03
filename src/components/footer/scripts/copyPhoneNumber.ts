export function copyPhoneNumber(
  setShowAlert: (value: boolean) => void,
) {
  navigator.clipboard.writeText('+5549989233265');
  setShowAlert(true);
  setTimeout(() => setShowAlert(false), 3000);
}
