import Image from "next/image";

interface PeopleProps {
  desc: string;
  img:
    | "user.png"
    | "user1.png"
    | "user2.png"
    | "user3.png"
    | "user4.png"
    | "user5.png";
  name: string;
  role: string;
}

export default function People(props: PeopleProps) {
  const { desc, img, name, role } = props;
  return (
    <div className="col-md-4 my-2" data-aos="fade-up" data-aos-duration="750">
      <p className="mb-3">{desc}</p>
      <div className="d-flex align-items-center">
        <Image
          src={`/${img}`}
          width={40}
          height={40}
          style={{
            marginRight: "0.01px",
          }}
          className="img-fluid"
          alt=""
        />
        <div className="pt-2" style={{ marginLeft: "10px" }}>
          <h6 className="font-weight-bold">{name}</h6>
          <p className="text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}
