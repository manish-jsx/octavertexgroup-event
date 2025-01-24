import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react"
import { User } from "@heroui/react"
import Image from "next/image"
import { ReactNode } from 'react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  image: string
  content: string
  logo: string
  industry: string
  icon: ReactNode
  metrics: string
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  image, 
  content, 
  logo, 
  industry,
  icon,
  metrics 
}: TestimonialCardProps) {
  return (
    <Card className="max-w-[380px] min-w-[380px] mx-2 transition-all duration-300 
      hover:scale-105 hover:shadow-lg
      bg-[rgb(15,24,41)]/90 backdrop-blur-xl 
      border border-[rgb(121,205,255)]/20 
      rounded-xl overflow-hidden">
      <CardHeader className="justify-between space-y-4">
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
        <div className="flex items-center gap-2 text-sm">
          {icon}
          <span className="text-[rgb(199,210,254)]/70">{industry}</span>
        </div>
      </CardHeader>
      
      <CardBody className="px-3 py-0 space-y-4">
        <p className="text-[rgb(199,210,254)]/70">{content}</p>
        <div className="bg-[rgb(121,205,255)]/10 p-2 rounded-lg">
          <p className="text-sm text-[rgb(121,205,255)] font-medium">{metrics}</p>
        </div>
      </CardBody>
      
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-[rgb(199,210,254)]/50">{company}</p>
        <div className="relative w-20 h-8">
          <Image 
            src={logo} 
            alt={`${company} logo`} 
            fill
            className="object-contain"
          />
        </div>
      </CardFooter>
    </Card>
  )
}

