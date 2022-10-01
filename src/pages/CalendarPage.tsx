import { Fragment, useEffect, useRef, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

const ModalContent = ({
  confirm,
  cancel,
}: {
  confirm: () => void;
  cancel: () => void;
}) => {
  return (
    <div className="bg-white rounded py-4 px-10 mx-auto w-1/2">
      <h1 className="text-center font-semibold text-base">Chi tiết lịch</h1>

      <div className="mt-8 grid grid-cols-[160px_1fr] gap-x-3 gap-y-5">
        <div>Khách hàng:</div>
        <div>Nguyễn Văn Tuấn</div>
        <div>Số điện thoại:</div>
        <div>0123456789</div>
        <div>Liệu trình:</div>
        <div>Tắm trắng, trị nám công nghệ Nhật Bản</div>
        <div>Thời lượng:</div>
        <div>30 phút</div>
        <div>Thời gian dự kiến:</div>
        <div>10.10.2022 thời gian từ 10h30 đến 11h00</div>
        <div>Kỹ thuật viên:</div>
        <div className="flex">
          <p>Nguyễn Văn Tuấn</p>
          <button className="ml-auto px-7 shadow bg-gray-50 border rounded-sm">
            Đổi
          </button>
        </div>
        <div>Trạng thái lịch:</div>
        <div>
          <p>Chưa checkin</p>
          <div className="flex gap-x-2 mt-4">
            <button className="px-7 shadow bg-gray-50 border rounded-sm">
              Checkin
            </button>
            <button className="px-7 shadow bg-gray-50 border rounded-sm">
              Hủy lịch
            </button>
            <button className="px-7 shadow bg-gray-50 border rounded-sm">
              Đổi lịch
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end gap-3">
        <button
          className="py-1 w-40 shadow border bg-purple-400 text-white rounded"
          onClick={() => cancel()}
        >
          Hủy
        </button>
        <button
          className="py-1 w-40 shadow border bg-purple-400 text-white rounded"
          onClick={() => confirm()}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

const CalendarPage = () => {
  const { pathname } = useLocation();
  const [showFilter, setShowFilter] = useState({
    branch: false,
    personnel: false,
  });

  const [showModal, setShowModal] = useState(false);
  const backDropRef = useRef<HTMLDivElement>(null);

  const fakeArr = [1, 2, 3, 4];
  const fakeArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    // console.log(showFilter);
  }, [showFilter]);
  return (
    <div className="min-h-screen bg-amber-50 p-5 flex flex-col gap-y-5 text-base relative">
      <div className="header h-16 bg-white shadow sticky top-0 z-40 flex items-center rounded-md p-3">
        <div className="flex-[0_0_220px] h-full pl-5">
          <img className="h-full w-auto" src="/images/logo/logo.svg" alt="" />
        </div>
        <div className="flex-1 h-full flex items-center px-5 border-l-2 border-gray-300">
          <div className="font-bold w-28">Lịch</div>
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
                  src="https://img.icons8.com/color/32/555555/circled-user-female-skin-type-4--v1.png"
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
        <div className="flex-1 bg-white rounded-md shadow py-3 px-5 text-sm">
          <div className="flex items-center">
            <div className="inline-block w-16 mr-5">Bộ lọc</div>
            <div className="w-44 inline-block mx-3 py-1 border border-gray-300 text-center rounded shadow-sm bg-slate-100 relative">
              <button
                className="cursor-pointer"
                onClick={() =>
                  setShowFilter((prev) => {
                    return { ...prev, branch: !prev.branch, personnel: false };
                  })
                }
              >
                Chọn chi nhánh
              </button>
              <div
                className="absolute z-10 cursor-pointer left-0 bottom-0 translate-y-full text-start shadow bg-white min-w-[230px] rounded overflow-hidden"
                style={
                  showFilter.branch ? { display: "block" } : { display: "none" }
                }
              >
                <div className="px-4 py-2 hover:bg-amber-50">
                  Spa Trần Duy Hưng
                </div>
                <div className="px-4 py-2 hover:bg-amber-50">
                  Spa Trần Duy Hưng
                </div>
                <div className="px-4 py-2 hover:bg-amber-50">
                  Spa Trần Duy Hưng
                </div>
              </div>
            </div>
            <div className="w-44 inline-block mx-3 py-1 border border-gray-300 text-center rounded shadow-sm bg-slate-100 relative">
              <button
                className="cursor-pointer"
                onClick={() =>
                  setShowFilter((prev) => {
                    return {
                      ...prev,
                      personnel: !prev.personnel,
                      branch: false,
                    };
                  })
                }
              >
                Chọn nhân viên
              </button>
              <div
                className="absolute z-10 cursor-pointer left-0 bottom-0 translate-y-full text-start shadow bg-white min-w-[280px] rounded overflow-hidden"
                style={
                  showFilter.personnel
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <div className="px-4 py-2 hover:bg-amber-50">
                  <p>
                    Chị Thơm <span className="text-gray-400">(Đang rảnh)</span>
                  </p>
                </div>
                <div className="px-4 py-2 hover:bg-amber-50">
                  <p>
                    Chị Thơm{" "}
                    <span className="text-gray-400">
                      (Đang trong liệu trình)
                    </span>
                  </p>
                  <p className="text-gray-400">còn 30 phút</p>
                </div>
                <div className="px-4 py-2 hover:bg-amber-50">
                  <p>
                    Chị Thơm <span className="text-gray-400">(Đang rảnh)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-44 inline-block mx-3 py-1 border border-gray-300 text-center rounded shadow-sm bg-slate-100 relative">
              <p>Thời gian</p>
            </div>

            <div className="inline-block w-24 ml-auto py-1 border border-gray-300 text-center rounded shadow-sm bg-purple-300 text-white">
              Thêm lịch
            </div>
          </div>

          <div className="flex mt-4">
            <div className="flex items-center w-1/3">
              <p className="mr-5">Nhân viên:</p>
              <div className="mx-1">
                <img
                  src="https://img.icons8.com/color/32/555555/circled-user-female-skin-type-4--v1.png"
                  alt="avatar"
                />
              </div>
              <div className="mx-1">
                <img
                  src="https://img.icons8.com/color/32/555555/circled-user-female-skin-type-4--v1.png"
                  alt="avatar"
                />
              </div>
              <div className="mx-1">
                <img
                  src="https://img.icons8.com/color/32/555555/circled-user-female-skin-type-4--v1.png"
                  alt="avatar"
                />
              </div>
            </div>

            <div className="flex items-center">
              <p className="mr-5">Cửa hàng:</p>
              <div className="mx-1 w-8 h-8 rounded-full border flex items-center justify-center">
                AM
              </div>
              <div className="mx-1 w-8 h-8 rounded-full border flex items-center justify-center">
                BM
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4 grid grid-cols-[120px_1fr] gap-3">
              <div className=""></div>
              <div className="flex border-b-2 py-2">
                {fakeArr.map((val, idx) => (
                  <div key={idx} className="flex-1 flex justify-center">
                    <div>
                      <img
                        src="https://img.icons8.com/color/32/555555/circled-user-female-skin-type-4--v1.png"
                        alt="avatar"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {fakeArr2.map((val, idx) => {
                return (
                  <Fragment key={idx}>
                    <div
                      className="flex items-center"
                      style={
                        idx == 3 ? { color: "red", fontWeight: "600" } : {}
                      }
                    >
                      {val + " AM"}
                    </div>
                    <div className="flex border-b-2 py-2">
                      {fakeArr.map((val, _idx) => (
                        <div key={idx} className="flex-1 flex">
                          {((_idx == 0 && idx != 2) ||
                            (_idx == 1 && idx == 2)) && (
                            <div
                              className="flex min-w-[150px] px-2 py-1 border shadow rounded cursor-pointer"
                              style={
                                idx == 3
                                  ? { backgroundColor: "pink" }
                                  : { backgroundColor: "#dddddd" }
                              }
                              onClick={() => setShowModal(true)}
                            >
                              <div className="flex-1">
                                <p>Chị Trâm</p>
                                <p className="text-xs text-slate-500">
                                  10h30 - 12h30
                                </p>
                                <p className="text-slate-500">Bà Triệu</p>
                              </div>
                              <div className="flex-shrink-0 flex items-center">
                                <img
                                  src="https://img.icons8.com/color/36/555555/circled-user-female-skin-type-4--v1.png"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#66666666] py-10 overflow-auto"
        style={showModal ? { display: "block" } : { display: "none" }}
        ref={backDropRef}
        onClick={(event) => {
          let targetElement = event.target;
          if (backDropRef) {
            if (backDropRef.current == targetElement) {
              setShowModal(false)
            }
          }
        }}
      >
        <ModalContent
          confirm={() => setShowModal(false)}
          cancel={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
