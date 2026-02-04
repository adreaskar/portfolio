"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Certification } from "../app/certifications/data"

interface CertificationCardProps {
  cert: Certification
}

export function CertificationCard({ cert }: CertificationCardProps) {
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  const rgb = hexToRgb(cert.color)

  return (
    <Link
      href={cert.verificationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div
        className="border-border bg-card relative flex flex-col items-center gap-4 rounded-lg border px-6 py-4 transition-all duration-300 hover:-translate-y-2"
        style={{
          boxShadow: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 20px 50px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        {/* Logo */}
        <div className="relative h-26 w-26 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={cert.logo}
            alt={cert.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg leading-tight font-semibold">{cert.title}</h3>

          {/* Credential ID Badge */}
          <Badge variant="outline" className="mt-3">
            {cert.credentialId}
          </Badge>

          <p className="text-muted-foreground text-xs">{cert.date}</p>
        </div>
      </div>
    </Link>
  )
}
