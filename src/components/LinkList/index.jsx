import React from "react";
import styles from "./linklist.module.scss";
import { links, dropdownProduct } from "@/documents";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: (
      <Link href="/" className={styles.link}>
        TRANG CHỦ
      </Link>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link href="/introduce" className={styles.link}>
        GIỚI THIỆU
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link href="/product" className={styles.link}>
        SẢN PHẨM
      </Link>
    ),
    key: "2",
  },
];

const LinkList = ({ formatList, fontLink, cate }) => {
  const router = useRouter();
  const check = cate ? styles.format : styles.formatFoot;
  return (
    <>
      <div className={`${formatList} ${check}`}>
        {links.map((item, index) => (
          <Link
            key={item.title}
            className={`${fontLink} ${styles.link}`}
            style={
              router.pathname === item.url
                ? { color: "#FF4E16" }
                : {} && index === links.length - 1
                ? { paddingBottom: 0 }
                : {}
            }
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
      </div>
      {cate ? (
        <Dropdown
        className={styles.dropdown}
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
                <HiMenuAlt3 className={styles.icon} style={{ cursor: "pointer" }} />
            </Space>
          </a>
        </Dropdown>
      ) : (
        ""
      )}
    </>
  );
};

export default LinkList;
