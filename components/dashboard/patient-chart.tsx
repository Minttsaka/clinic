"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { healthVisitsData } from "@/lib/demo-data"
import { useState } from "react"

export function PatientChart() {
  const [activeView, setActiveView] = useState<"week" | "month" | "year">("year")

  const getChartData = () => {
    switch (activeView) {
      case "week":
        return healthVisitsData.slice(-2) // Last 2 months for week view
      case "month":
        return healthVisitsData.slice(-6) // Last 6 months
      case "year":
      default:
        return healthVisitsData // Full year
    }
  }

  return (
    <Card className="p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">My Health Visits</h3>
        <div className="flex gap-2">
          <Button
            variant={activeView === "week" ? "outline" : "ghost"}
            size="sm"
            className="text-xs h-6 px-2"
            onClick={() => setActiveView("week")}
          >
            Week
          </Button>
          <Button
            variant={activeView === "month" ? "outline" : "ghost"}
            size="sm"
            className="text-xs h-6 px-2"
            onClick={() => setActiveView("month")}
          >
            Month
          </Button>
          <Button
            variant={activeView === "year" ? "outline" : "ghost"}
            size="sm"
            className="text-xs h-6 px-2 bg-transparent"
            onClick={() => setActiveView("year")}
          >
            Year-2024
          </Button>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={getChartData()}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#6b7280" />
            <YAxis tick={{ fontSize: 10 }} stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                fontSize: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Line
              type="monotone"
              dataKey="scheduled"
              stroke="#374151"
              strokeWidth={2}
              name="Scheduled visits"
              dot={{ fill: "#374151", strokeWidth: 2, r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#14b8a6"
              strokeWidth={2}
              name="Completed visits"
              dot={{ fill: "#14b8a6", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
