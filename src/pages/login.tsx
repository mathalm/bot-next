import { useSession, signOut, signIn } from "next-auth/react";
import { api } from "~/utils/api";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center bg-gray-100 p-4 lg:justify-center">
      <div className="max flex flex-col overflow-hidden rounded-md bg-white shadow-lg md:flex-1 md:flex-row lg:max-w-screen-md">
        <div className="bg-[#25D366] p-4 py-6 text-white md:flex md:w-80 md:flex-shrink-0 md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-center text-4xl font-bold tracking-wider">
            <a href="#" className="shadow-black drop-shadow-sm">
              WhatsBot
            </a>
          </div>
          <p className="mt-6 text-center font-normal text-white shadow-black drop-shadow-sm md:mt-0">
            With the power of WhatsBot, you can now focus only on functionaries
            for your digital products, while leaving the UI design on us!
          </p>
          <p className="mt-6 text-center text-sm text-white shadow-black drop-shadow-sm">
            Read our{" "}
            <a href="#" className="underline shadow-black drop-shadow-sm">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline shadow-black drop-shadow-sm">
              conditions
            </a>
          </p>
        </div>
        <div className="flex w-60 items-center justify-center bg-white p-5 md:flex-1">
          <AuthShowcase />
        </div>
      </div>
    </div>
  );
};

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white shadow-black drop-shadow-sm">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="flex items-center justify-center gap-3 rounded-full bg-black/10 px-10 py-3 font-semibold text-black no-underline shadow-black drop-shadow-sm transition hover:bg-black/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        <div className="h-6 w-6">
          <svg
            viewBox="0 -28.5 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  fill="#5865F2"
                  fill-rule="nonzero"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default Login;
