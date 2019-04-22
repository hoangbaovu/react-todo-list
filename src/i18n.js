import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "DELETE": "Delete",
      "EDIT": "Edit",
      "SEARCH": "Search",
      "SEARCH_PLACEHOLDER": "Enter search...",
      "SUBMIT": "Submit",
      "TASK_SUBMIT_PLACEHOLDER": "Enter the task to do",
      "TASK_LIST": "Task list",
      "TASK_DONE": "Have {{count}} completed tasks.",
      "TASK_UNDONE": "Have {{count}} unfinished tasks.",
      "TASK_ADD": "Add task",
      "NAVBAR_HOME": "Home",
      "NAVBAR_TODOS": "Todos",
      "NAVBAR_ABOUT": "About"
    }
  },
  vn: {
    translation: {
      "DELETE": "Xoá",
      "EDIT": "Sửa",
      "SEARCH": "Tìm kiếm",
      "SEARCH_PLACEHOLDER": "Nhập nội dung tìm kiếm...",
      "SUBMIT": "Gửi",
      "TASK_SUBMIT_PLACEHOLDER": "Nhập công việc cần làm",
      "TASK_LIST": "Danh sách công việc",
      "TASK_DONE": "Có {{count}} công việc đã hoàn thành.",
      "TASK_UNDONE": "Có {{count}} công việc chưa hoàn thành.",
      "TASK_ADD": "Thêm công việc",
      "NAVBAR_HOME": "Trang chủ",
      "NAVBAR_TODOS": "Công việc",
      "NAVBAR_ABOUT": "Giới thiệu"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn",
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;