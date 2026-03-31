export function copyPhoneNumber(
  setShowAlert: (value: boolean) => void,
) {
  navigator.clipboard.writeText('+5519986011419');
  setShowAlert(true);
  setTimeout(() => setShowAlert(false), 3000);
}
