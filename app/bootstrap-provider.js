"use client"; // ✅ هذا الملف يجب أن يكون Client Component

import { useEffect } from "react";

export default function BootstrapProvider() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; // 🔹 لا يحتاج إلى إرجاع أي شيء
}
