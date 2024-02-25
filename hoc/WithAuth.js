import Loader from "@/components/Loader";
import useAuthenticationStatus from "@/hooks/useAuthenticationStatus";
import { useRouter } from "next/navigation";

export default function withAuth(Component) {
  return function AuthProtected(props) {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuthenticationStatus();

    if (isLoading) {
      return (
        <div className="h-screen w-screen flex justify-center items-center">
          <Loader />
        </div>
      );
    }

    if (!isAuthenticated) {
      router.replace("/login");
      return null;
    }

    return <Component {...props} />;
  };
}
