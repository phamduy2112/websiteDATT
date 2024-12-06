// components/Sidebar.js
import { FaUser, FaBell, FaShoppingCart, FaHeart, FaComment } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-1/4 p-4  h-screen">
      <div className=" mb-4 flex gap-2">
        <img
          src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/370806166_3341899006026926_5652140347426452061_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=IQxVx5ILtS8Q7kNvgFobesI&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AM9bvI2lyZiTT_8f57wcPua&oh=00_AYBogub-mftXralEW4Et1PGv2HGmzEUcBPsAxkiYKA6ruw&oe=6736D40D"
          alt="Profile"
          className="rounded-full w-[3.5rem] h-[3.5rem]"
        />
        <div>
        <p>Tài khoản của: </p>
        <h2 className="text-lg font-semibold">Duy Phạm Ngọc</h2>

        </div>
      </div>
      <nav className="space-y-4">
        <NavItem icon={<FaUser />} label="Thông tin tài khoản" />
        <NavItem icon={<FaBell />} label="Thông báo của tôi" />
        <NavItem icon={<FaShoppingCart />} label="Quản lý đơn hàng" />
        <NavItem icon={<FaHeart />} label="Sản phẩm yêu thích" />
        <NavItem icon={<FaComment />} label="Nhận xét của tôi" />
        {/* Add more NavItems as needed */}
      </nav>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
