import React from "react";
import "./style.scss";
import {
  DashboardIcon,
  AccountsIcon,
  CardsIcon,
  TransferIcon,
  LogoutIcon,
  SettingIcon,
  RoleIcon,
  PackageIcon,
  OrganizationIcon,
  LessonsIcon,
  BooksIcon,
  UsersIcon,
  SchoolIcon,
} from "../Icons/sidebarIcons";
import { Link } from "react-router-dom";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { cn } from "@/lib/utils";

export default function Sidebar({ className }) {
  const currentPath = window.location.pathname.split("/").join("");

  const signOutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <>
      <div className={`sideBar ${className || "h-100"} `}>
        <div className="d-flex justify-content-between flex-column h-100">
          <div>
            <ul className="list-group ms-3 mt-4">
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2 ml-3">
                  <DashboardIcon width={22} height={22} />
                  <Link
                    className={`${
                      currentPath == "admin" ? "text-success" : "tesxt-dark"
                    } p-0 pl-3 links`}
                    to="/admin"
                  >
                    Dashboard
                  </Link>
                </div>
              </li>
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2 ml-3">
                  <UsersIcon width={22} height={22} />
                  <Link
                    className={`${
                      currentPath.includes("users")
                        ? "text-success"
                        : "tesxt-dark"
                    } p-0 pl-3 links`}
                    to="/admin/users"
                  >
                    Users
                  </Link>
                </div>
              </li>
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2 ml-3">
                  <CardsIcon width={22} height={22} />
                  <Link
                    className={`${
                      currentPath.includes("roles")
                        ? "text-success"
                        : "tesxt-dark"
                    } p-0 pl-3 links`}
                    to="/admin/roles"
                  >
                    Roles
                  </Link>
                </div>
              </li>
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2 ml-3">
                  <SchoolIcon width={22} height={22} />
                  <Link
                    className={`${
                      currentPath.includes("schools")
                        ? "text-success"
                        : "tesxt-dark"
                    } p-0 pl-3 links`}
                    to="/admin/schools"
                  >
                    Schools
                  </Link>
                </div>
              </li>
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2 ml-3">
                  <OrganizationIcon width={22} height={22} />
                  <Link
                    className={`${
                      currentPath.includes("organizations")
                        ? "text-success"
                        : "tesxt-dark"
                    } p-0 pl-3 links`}
                    to="/admin/organizations"
                  >
                    Organizations
                  </Link>
                </div>
              </li>
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2 ml-3">
                  <LessonsIcon width={22} height={22} />
                  <Link
                    className={`${
                      currentPath.includes("lessons")
                        ? "text-success"
                        : "tesxt-dark"
                    } p-0 pl-3 links`}
                    to="/admin/lessons"
                  >
                    Lessons
                  </Link>
                </div>
              </li>
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2 ml-3">
                  <PackageIcon width={22} height={22} />
                  <Link
                    className={`${
                      currentPath.includes("packages")
                        ? "text-success"
                        : "tesxt-dark"
                    } p-0 pl-3 links`}
                    to="/admin/packages"
                  >
                    Packages
                  </Link>
                </div>
              </li>
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold d-lg-none">
                <div className="d-flex gap-2 ml-3">
                  <LogoutIcon width={22} height={22} />
                  <Link className={"p-0 pl-3 links"} onClick={signOutHandler}>
                    Sign Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
