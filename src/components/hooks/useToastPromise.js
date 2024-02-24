import { toast } from "react-toastify";

export default function useToastPromise(asyncFunc, title) {
  const toastPromise = () => {
    return toast.promise(asyncFunc, {
      pending: {
        render() {
          return `${title}..`;
        },
        // icon: false,
      },
      success: {
        render({ data }) {
          return `${title}`;
        },
        // other options
        icon: "✅",
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          return "Error";
        },
        icon: "❌",
      },
    });
    // return toast.promise(asyncFunc, {
    //   pending: "Promise is pending",
    //   success: "Promise resolved 👌",
    //   error: "Promise rejected 🤯",
    // });
  };
  return toastPromise;
}
