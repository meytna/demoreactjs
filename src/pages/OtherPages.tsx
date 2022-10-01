import { Link, matchPath, useLocation } from "react-router-dom";

const OtherPages = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-screen bg-amber-50 p-5 flex flex-col gap-y-5 text-base">
      <div className="header h-16 bg-white shadow sticky top-0 z-50 flex items-center rounded-md p-3">
        <div className="flex-[0_0_220px] h-full pl-5">
          <img className="h-full w-auto" src="./images/logo/logo.svg" alt="" />
        </div>
        <div className="flex-1 h-full flex items-center px-5 border-l-2 border-gray-300">
          <div className="font-bold w-28">Orther</div>
          <div className="h-full flex-1 relative">
            <input
              className="h-full w-full border-2 rounded-2xl text-base pl-12 pr-5"
              placeholder="Tên khách hàng"
            />
            <img
              className="absolute left-3 top-1/2 -translate-y-1/2"
              src="/images/icons/search.svg"
            />
          </div>
          <p className="text-base text-gray-400 font-semibold px-5">
            8 Jul, 2022
          </p>
          <div className="px-5 flex">
            <div className="px-3 py-2 rounded-2xl bg-slate-200">
              <img
                src="https://img.icons8.com/material-outlined/20/555555/appointment-reminders--v1.png"
                alt="avatar"
              />
            </div>
          </div>
          <div className="px-5">
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src="https://img.icons8.com/color/20/555555/circled-user-female-skin-type-4--v1.png"
                  alt="avatar"
                />
              </div>
              <p className="text-base font-semibold">Thanh Dat</p>
              <div className="ml-4 w-3 h-3 rotate-45 border-[0_2px_2px_0] border-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="body flex-1 flex gap-x-5">
        <div className="left-bar flex-[0_0_220px] flex flex-col gap-2">
          <Link
            className="block font-medium px-6 py-3 rounded-md"
            to="/calendar"
            style={
              matchPath("/calendar/*", pathname)
                ? { backgroundColor: "white", boxShadow: "0 1px 1px gray" }
                : {}
            }
          >
            <div className="flex items-center">
              <img
                className="mr-3"
                src="https://img.icons8.com/material-outlined/20/555555/calendar--v1.png"
              />
              <p>Lịch</p>
            </div>
          </Link>
          <Link
            className="block font-medium px-6 py-3 rounded-md"
            to="/orders"
            style={
              matchPath("/orders/*", pathname)
                ? { backgroundColor: "white", boxShadow: "0 1px 1px gray" }
                : {}
            }
          >
            <div className="flex items-center">
              <img
                className="mr-3"
                src="https://img.icons8.com/fluency-systems-regular/20/555555/shopping-cart.png"
              />
              <p>Đơn hàng</p>
            </div>
          </Link>
          <Link
            className="block font-medium px-6 py-3 rounded-md"
            to="/products"
            style={
              matchPath("/products/*", pathname)
                ? { backgroundColor: "white", boxShadow: "0 1px 1px gray" }
                : {}
            }
          >
            <div className="flex items-center">
              <img
                className="mr-3"
                src="https://img.icons8.com/cotton/20/555555/box--v4.png"
              />
              <p>Sản phẩm</p>
            </div>
          </Link>
          <Link
            className="block font-medium px-6 py-3 rounded-md"
            to="/reports"
            style={
              matchPath("/reports/*", pathname)
                ? { backgroundColor: "white", boxShadow: "0 1px 1px gray" }
                : {}
            }
          >
            <div className="flex items-center">
              <img
                className="mr-3"
                src="https://img.icons8.com/ios-glyphs/20/555555/combo-chart--v1.png"
              />
              <p>Báo cáo</p>
            </div>
          </Link>
          <Link
            className="block font-medium px-6 py-3 rounded-md"
            to="/customers"
            style={
              matchPath("/customers/*", pathname)
                ? { backgroundColor: "white", boxShadow: "0 1px 1px gray" }
                : {}
            }
          >
            <div className="flex items-center">
              <img
                className="mr-3"
                src="https://img.icons8.com/windows/20/555555/user-group-man-man--v1.png"
              />
              <p>Khách hàng</p>
            </div>
          </Link>
          <Link
            className="block font-medium px-6 py-3 rounded-md"
            to="/personnels"
            style={
              matchPath("/personnels/*", pathname)
                ? { backgroundColor: "white", boxShadow: "0 1px 1px gray" }
                : {}
            }
          >
            <div className="flex items-center">
              <img
                className="mr-3"
                src="https://img.icons8.com/windows/20/555555/collaborator-male.png"
              />
              <p>Nhân sự</p>
            </div>
          </Link>
          <Link
            className="block font-medium px-6 py-3 rounded-md"
            to="/settings"
            style={
              matchPath("/settings/*", pathname)
                ? { backgroundColor: "white", boxShadow: "0 1px 1px gray" }
                : {}
            }
          >
            <div className="flex items-center">
              <img
                className="mr-3"
                src="https://img.icons8.com/windows/20/555555/settings--v1.png"
              />
              <p>Settings</p>
            </div>
          </Link>
        </div>
        <div className="flex-1  bg-white rounded-md shadow"></div>
      </div>
    </div>
  );
};

export default OtherPages;
