import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

// Firebase web config values are public identifiers, safe to ship in client code.
const firebaseConfig = {
  apiKey: "AIzaSyAcY__eEWQLPghR3vuwJ3qO2J4uA-be61A",
  authDomain: "weisman-01.firebaseapp.com",
  projectId: "weisman-01",
  storageBucket: "weisman-01.firebasestorage.app",
  messagingSenderId: "1043752965762",
  appId: "1:1043752965762:web:54155e5cbbb5435475469b",
  measurementId: "G-DJBKXQM2W0",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Analytics needs a browser; call only from client-side code.
export async function initAnalytics() {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
}

// Performance Monitoring also needs a browser; call only from client-side code.
export function initPerformance() {
  return getPerformance(app);
}
