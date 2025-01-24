import React from "react"
import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@heroui/react"
import { User } from "@heroui/react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  image: string
  content: string
  logo: string
}

export default function TestimonialCard({ name, role, company, image, content, logo }: TestimonialCardProps) {
  return (
    <Card className="max-w-[450px] min-w-[450px] mx-2 transition-transform duration-300 hover:scale-105 
      bg-[rgb(15,24,41)]/90 backdrop-blur-xl 
      border border-[rgb(121,205,255)]/20 
      rounded-xl overflow-hidden shadow-lg">
      <CardHeader className="justify-between">
        <User
          avatarProps={{
            src: image,
            size: "lg",
            isBordered: true,
          }}
          description={role}
          name={name}
          className="text-[rgb(199,210,254)]"
        />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-[rgb(199,210,254)]/70">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <p className="text-small text-[rgb(199,210,254)]/50">{company}</p>
        <Image src={logo || "/placeholder.svg"} alt={`${company} logo`} width={50} height={20} />
      </CardFooter>
    </Card>
  )
}

