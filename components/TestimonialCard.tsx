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
    <Card className="max-w-[450px] min-w-[450px] mx-2 transition-transform duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg">
      <CardHeader className="justify-between">
        <User
          avatarProps={{
            src: image,
            size: "lg",
            isBordered: true,
          }}
          description={role}
          name={name}
        />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <p className="text-small text-default-500">{company}</p>
        <Image src={logo || "/placeholder.svg"} alt={`${company} logo`} width={50} height={20} />
      </CardFooter>
    </Card>
  )
}

