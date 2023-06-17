const AuthLayout = (props) => {
  const { children } = props;
  const imgLogin = [
    {
      url: "https://images.unsplash.com/photo-1635451151786-46b0cca30e75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdvbWVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBtb3VudGFpbiUyMHJvY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className=" relative flex m-auto min-h-screen justify-center items-center bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 ">
      {/* <MainBg img={imgLogin[1].url} /> */}
      <div className="flex justify-center items-center">
        <div className="w-[400px] h-[600px]">
          <div
            className="w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${imgLogin[0].url})`,
            }}
          ></div>
        </div>
            {children}
      </div>
    </div>
  );
};

export default AuthLayout;
