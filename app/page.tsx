"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Target,
  TrendingUp,
  Users,
  ArrowRight,
  ExternalLink,
  Zap,
  Award,
  Heart,
  Flame,
  Star,
  Trophy,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function AITrainerLP() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const CountUpNumber = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            let start = 0
            const increment = target / (duration / 16)
            const timer = setInterval(() => {
              start += increment
              if (start >= target) {
                setCount(target)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 16)
          }
        },
        { threshold: 0.5 },
      )

      const element = document.getElementById(`count-${target}`)
      if (element) observer.observe(element)

      return () => observer.disconnect()
    }, [target, duration, isVisible])

    return <span id={`count-${target}`}>{count}</span>
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden relative">
      {/* Dynamic Particle Background - Monochrome */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        {/* Floating particles - Black and Gray */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Energy waves - Monochrome */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-black to-transparent animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div
            className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-pulse"
            style={{ transform: `translateY(${-scrollY * 0.15}px)`, animationDelay: "1s" }}
          />
          <div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.2}px)`, animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-wide relative group">
              <span className="relative z-10">AI-Kommon</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              <div className="absolute -top-1 -right-8 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Monochrome Energy */}
      <section className="pt-40 pb-32 px-8 relative z-10">
        {/* Subtle Energy Background - Monochrome */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] bg-gradient-radial from-gray-100 via-transparent to-transparent animate-pulse"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-gradient-radial from-gray-50 via-transparent to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Geometric Circles - Monochrome */}
          <div
            className="absolute top-20 left-20 w-32 h-32 border border-gray-300 rounded-full animate-spin opacity-30"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute top-32 left-40 w-24 h-24 border border-gray-400 rounded-full animate-spin opacity-20"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-28 h-28 border border-gray-200 rounded-full animate-spin opacity-25"
            style={{ animationDuration: "25s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/3 w-20 h-20 border border-gray-500 rounded-full animate-spin opacity-15"
            style={{ animationDuration: "18s", animationDirection: "reverse" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge
            variant="outline"
            className="mb-12 border-black text-black hover:bg-black hover:text-white transition-all duration-500 text-base px-8 py-3 font-light tracking-wider relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center gap-2">
              <Flame className="h-4 w-4 animate-pulse" />
              部活動指導の未来
              <Flame className="h-4 w-4 animate-pulse" />
            </span>
          </Badge>

          <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-tight leading-none relative group">
            <span
              className="inline-block hover:scale-110 transition-transform duration-300"
              style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 5}px)` }}
            >
              すべての学生に
            </span>
            <br />
            <span className="font-normal relative inline-block group-hover:text-gray-700 transition-colors duration-500">
              <span
                className="inline-block hover:scale-110 transition-transform duration-300"
                style={{ transform: `translateY(${Math.cos(scrollY * 0.01) * 5}px)` }}
              >
                最高の指導を
              </span>
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 via-gray-400 to-black bg-[length:200%_100%] animate-gradient-x"></div>
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 mb-16 font-extralight leading-relaxed tracking-wide relative">
            {/*
              @description
              この段落はAIによる個別最適化指導の説明文です。
              <div>タグを<span>タグに置き換え、HTML構造エラーを回避しています。
              TODO: デザイン上問題があれば、CSSで調整してください。
            */}
            <span className="inline-block hover:text-black transition-colors duration-300">
              AIが一人ひとりの動作を分析し、
            </span>
            <br />
            <span className="relative inline-block hover:text-gray-800 transition-colors duration-300">
              個別最適化された指導を提供します
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://www.youtube.com/watch?v=H5cZcR3v6XE" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 border-2 border-black hover:border-gray-800 px-12 py-4 text-base font-light tracking-wide transition-all duration-500 relative group overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-black/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <Play className="mr-3 h-5 w-5 relative z-10 group-hover:animate-pulse" />
                <span className="relative z-10">デモを見る</span>
                <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></div>
              </Button>
            </a>
            <a href="https://zenn.dev/delzaky/articles/8feac8cfbac845" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-4 text-base font-light tracking-wide transition-all duration-500 bg-transparent relative group overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10">テックブログ</span>
                <ArrowRight className="ml-3 h-5 w-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Product Demo Visual - Monochrome Stadium */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border-2 border-black shadow-2xl overflow-hidden relative group hover:border-gray-800 transition-all duration-500 transform hover:scale-[1.02]">
              {/* Spotlight Effects - Monochrome */}
              <div className="absolute -top-10 left-1/4 w-20 h-20 bg-gray-200 rounded-full blur-xl animate-pulse opacity-50"></div>
              <div
                className="absolute -top-10 right-1/4 w-20 h-20 bg-gray-100 rounded-full blur-xl animate-pulse opacity-40"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="aspect-video relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/H5cZcR3v6XE"
                  title="AI-Kommon システムデモ動画"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-500"
                ></iframe>
                {/* Monochrome Stars */}
                <div className="absolute top-4 right-4 flex gap-1">
                  <Star className="h-4 w-4 text-gray-600 animate-pulse" />
                  <Star className="h-4 w-4 text-gray-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <Star className="h-4 w-4 text-gray-400 animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
              </div>
            </div>

            {/* Quote - Fixed positioning */}
            <div className="text-center mt-16 relative">
              <p className="text-xl text-gray-600 font-light italic tracking-wide">
                "努力は必ず報われる。AIがその努力を最大化する。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Proposition - Monochrome Power */}
      <section className="py-40 px-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24 relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex gap-4">
              <div className="w-3 h-3 bg-black rounded-full animate-bounce opacity-60"></div>
              <div
                className="w-3 h-3 bg-gray-600 rounded-full animate-bounce opacity-50"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-gray-400 rounded-full animate-bounce opacity-40"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="w-3 h-3 bg-gray-300 rounded-full animate-bounce opacity-30"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight relative group">
              <span className="hover:text-gray-700 transition-all duration-500">指導者の経験に関係なく</span>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-black via-gray-600 to-black animate-pulse"></div>
            </h2>
            <p className="text-2xl text-gray-600 font-extralight tracking-wide">
              すべての学生が質の高い指導を受けられる世界を実現します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-20">
            <div className="text-center group relative transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 border-2 border-black mx-auto mb-10 flex items-center justify-center group-hover:bg-black group-hover:border-gray-800 transition-all duration-500 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <Target className="h-10 w-10 text-black group-hover:text-white transition-colors duration-500 relative z-10 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-black/20 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="text-2xl font-light mb-6 tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                個別最適化
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg tracking-wide group-hover:text-gray-800 transition-colors duration-300">
                一人ひとりの体格、技術レベル、性格に合わせた指導プランを自動生成
              </p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-black to-gray-600 group-hover:w-20 transition-all duration-500"></div>
            </div>

            <div className="text-center group relative transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 border-2 border-black mx-auto mb-10 flex items-center justify-center group-hover:bg-black group-hover:border-gray-800 transition-all duration-500 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <TrendingUp className="h-10 w-10 text-black group-hover:text-white transition-colors duration-500 relative z-10 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-black/20 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="text-2xl font-light mb-6 tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                継続的改善
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg tracking-wide group-hover:text-gray-800 transition-colors duration-300">
                練習の進捗を追跡し、常に最適な指導方法にアップデート
              </p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-black to-gray-600 group-hover:w-20 transition-all duration-500"></div>
            </div>

            <div className="text-center group relative transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 border-2 border-black mx-auto mb-10 flex items-center justify-center group-hover:bg-black group-hover:border-gray-800 transition-all duration-500 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <Users className="h-10 w-10 text-black group-hover:text-white transition-colors duration-500 relative z-10 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-black/20 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="text-2xl font-light mb-6 tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                指導者支援
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg tracking-wide group-hover:text-gray-800 transition-colors duration-300">
                経験の浅い指導者でも、ベテランコーチレベルの指導が可能
              </p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-black to-gray-600 group-hover:w-20 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Monochrome Championship */}
      <section className="py-40 bg-black text-white px-8 relative overflow-hidden z-10">
        {/* Monochrome Arena Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-600 via-white via-gray-400 via-gray-200 to-gray-600 bg-[length:200%_100%] animate-gradient-x"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-white via-gray-300 via-gray-500 via-gray-700 to-white bg-[length:200%_100%] animate-gradient-x"></div>

          <div className="absolute top-20 left-20 w-64 h-64 border border-white/30 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-48 h-48 border border-gray-400/30 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-600/20 rounded-full animate-spin"
            style={{ animationDuration: "30s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight relative">
              <span className="hover:text-gray-300 transition-all duration-500">シンプルな2ステップ</span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white via-gray-400 to-white animate-pulse"></div>
            </h2>
            <p className="text-xl text-gray-300 font-light tracking-wide mt-8">
              部活動の可能性を最大限に引き出す革新的なプロセス
            </p>
          </div>

          <div className="space-y-32">
            <div className="flex flex-col md:flex-row items-center gap-16 group">
              <div className="flex-1 relative">
                <div className="text-8xl font-extralight text-gray-500 mb-8 group-hover:text-gray-300 transition-colors duration-500 relative">
                  <span className="relative z-10">01</span>
                  <div className="absolute inset-0 bg-white/10 blur-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <Zap className="h-8 w-8 text-white group-hover:text-gray-300 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  <h3 className="text-3xl font-light tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                    AI分析
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed font-light text-xl tracking-wide mb-6 group-hover:text-white transition-colors duration-300">
                  最新の3D姿勢推定技術で動作を詳細に分析し、改善点を特定します。
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 group-hover:w-40 group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-500"></div>
              </div>
              <div className="flex-1">
                <div className="aspect-video bg-gray-900 border-2 border-gray-700 overflow-hidden relative group-hover:border-gray-500 group-hover:shadow-2xl group-hover:shadow-white/10 transition-all duration-500 transform group-hover:scale-105">
                  <Image
                    src="/images/ai-analysis.png"
                    alt="AI分析のイメージ - 3D姿勢推定による動作解析"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-16 group">
              <div className="flex-1 relative">
                <div className="text-8xl font-extralight text-gray-500 mb-8 group-hover:text-gray-300 transition-colors duration-500 relative">
                  <span className="relative z-10">02</span>
                  <div className="absolute inset-0 bg-white/10 blur-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <Heart className="h-8 w-8 text-white group-hover:text-gray-300 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  <h3 className="text-3xl font-light tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                    個別指導
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed font-light text-xl tracking-wide mb-6 group-hover:text-white transition-colors duration-300">
                  学生一人ひとりに最適化された練習メニューと具体的なアドバイスを提供。
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 group-hover:w-40 group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-500"></div>
              </div>
              <div className="flex-1">
                <div className="aspect-video bg-gray-900 border-2 border-gray-700 overflow-hidden relative group-hover:border-gray-500 group-hover:shadow-2xl group-hover:shadow-white/10 transition-all duration-500 transform group-hover:scale-105">
                  <Image
                    src="/images/coaching-interface.png"
                    alt="指導画面のイメージ - コーチングレポートとアドバイス"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-1">
                      <Trophy className="h-4 w-4 text-white animate-pulse" />
                      <Star className="h-4 w-4 text-gray-300 animate-pulse" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Monochrome Medal Ceremony */}
      <section className="py-40 px-8 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4 mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <Award className="h-12 w-12 text-black animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight hover:text-gray-700 transition-colors duration-500">
              実証された効果
            </h2>
            <Award className="h-12 w-12 text-black animate-pulse" />
          </div>

          <Card className="border-2 border-black overflow-hidden relative group hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 bg-white transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 via-white/10 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Monochrome Lights */}
            <div className="absolute -top-4 left-1/4 w-8 h-8 bg-gray-200 rounded-full blur-lg animate-pulse opacity-50"></div>
            <div
              className="absolute -top-4 right-1/4 w-8 h-8 bg-gray-100 rounded-full blur-lg animate-pulse opacity-40"
              style={{ animationDelay: "1s" }}
            ></div>

            <CardContent className="p-16 relative z-10">
              <div className="grid md:grid-cols-2 gap-16">
                <div className="relative group/stat transform hover:scale-110 transition-transform duration-300">
                  <div className="text-6xl font-extralight text-black mb-6 relative">
                    <CountUpNumber target={95} />%
                    <div className="absolute -top-2 -right-4 w-4 h-4 bg-black rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute inset-0 bg-black/10 blur-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-2xl font-light mb-4 tracking-wide text-gray-700">学生満足度</h3>
                  <p className="text-gray-600 font-light text-lg tracking-wide">
                    「今まで気づかなかった課題を発見できた」
                  </p>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-black to-gray-600 group-hover/stat:w-24 transition-all duration-500"></div>
                </div>
                <div className="relative group/stat transform hover:scale-110 transition-transform duration-300">
                  <div className="text-6xl font-extralight text-black mb-6 relative">
                    <CountUpNumber target={87} />%
                    <div
                      className="absolute -top-2 -right-4 w-4 h-4 bg-gray-600 rounded-full animate-bounce opacity-60"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div className="absolute inset-0 bg-black/10 blur-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-2xl font-light mb-4 tracking-wide text-gray-700">指導者評価</h3>
                  <p className="text-gray-600 font-light text-lg tracking-wide">「指導の質が大幅に向上した」</p>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-black to-gray-600 group-hover/stat:w-24 transition-all duration-500"></div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-200 relative">
                <p className="text-gray-500 font-light tracking-wide">導入先での検証結果</p>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-black via-gray-600 to-black animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section - Monochrome Team Championship */}
      <section className="py-40 px-8 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24 relative">
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight relative">
              <span className="hover:text-gray-700 transition-all duration-500">開発チーム</span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-black via-gray-600 to-black animate-pulse"></div>
            </h2>
            <p className="text-xl text-gray-600 font-extralight tracking-wide">
              部活動指導の未来を創造する4名のメンバー
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center group relative p-8 hover:bg-white hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 rounded-lg border border-transparent hover:border-gray-200 transform hover:scale-105">
              <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-6 group-hover:w-32 group-hover:shadow-lg group-hover:shadow-black/20 transition-all duration-500"></div>
              <h3 className="text-xl font-light mb-2 tracking-wide text-black group-hover:text-gray-700 transition-colors duration-300">
                尾崎 大晟
              </h3>
              <p className="text-gray-600 font-light tracking-wide mb-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                代表・開発リーダー
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-4 group-hover:text-gray-600 transition-colors duration-300">
                大阪公立大学博士後期課程・東京大学松尾研究室学術専門職員。
                <br />
                経済産業省GeniacプロジェクトでLLM開発チームリーダーを経験。
                <br />
                マルチエージェントシステム・RAGシステムの開発に強みを持つ。
              </p>
              <a
                href="https://huggingface.co/spaces/DeL-TaiseiOzaki/My_Profile_Site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide group/link"
              >
                Contact
                <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            <div className="text-center group relative p-8 hover:bg-white hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 rounded-lg border border-transparent hover:border-gray-200 transform hover:scale-105">
              <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-6 group-hover:w-32 group-hover:shadow-lg group-hover:shadow-black/20 transition-all duration-500"></div>
              <h3 className="text-xl font-light mb-2 tracking-wide text-black group-hover:text-gray-700 transition-colors duration-300">
                石川 璃雄
              </h3>
              <p className="text-gray-600 font-light tracking-wide mb-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                開発メンバー・副リーダー
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-4 group-hover:text-gray-600 transition-colors duration-300">
                大阪公立大学博士前期課程で遠隔農業技術を研究。
                <br />
                3Dモデリングの開発経験を活かし、本サービスのエージェントシステムに精通。
                <br />
                副代表としてModeling Agentの高度化に取り組む。
              </p>
              <a
                href="https://x.com/LcZ5DqCyXL0kdNL?t=NDerTPztHZJaBeumbKwScw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide group/link"
              >
                Contact
                <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            <div className="text-center group relative p-8 hover:bg-white hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 rounded-lg border border-transparent hover:border-gray-200 transform hover:scale-105">
              <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-6 group-hover:w-32 group-hover:shadow-lg group-hover:shadow-black/20 transition-all duration-500"></div>
              <h3 className="text-xl font-light mb-2 tracking-wide text-black group-hover:text-gray-700 transition-colors duration-300">
                筧 万里
              </h3>
              <p className="text-gray-600 font-light tracking-wide mb-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                アプリケーションエンジニア
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-4 group-hover:text-gray-600 transition-colors duration-300">
                情報学専攻でアクセシビリティ課題の解決に取り組む。
                <br />
                大阪公立大学発スタートアップでAI教育アプリの開発に従事。
                <br />
                プロトタイピングからスケーリングまで対応可能。
              </p>
              <a
                href="https://www.linkedin.com/in/banri-kakehi-121915351/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide group/link"
              >
                Contact
                <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            <div className="text-center group relative p-8 hover:bg-white hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 rounded-lg border border-transparent hover:border-gray-200 transform hover:scale-105">
              <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-6 group-hover:w-32 group-hover:shadow-lg group-hover:shadow-black/20 transition-all duration-500"></div>
              <h3 className="text-xl font-light mb-2 tracking-wide text-black group-hover:text-gray-700 transition-colors duration-300">
                宮田 大資
              </h3>
              <p className="text-gray-600 font-light tracking-wide mb-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                AIエンジニア
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-4 group-hover:text-gray-600 transition-colors duration-300">
                京都産業大学で深層学習・画像処理を専攻。
                <br />
                松尾研究所でインターン生として従事、PoCからAIアプリ開発まで幅広い範囲を担当。
                <br />
                メルカリAIハッカソン優秀賞など複数の受賞歴を持つ。
              </p>
              <a
                href="https://my.prairie.cards/u/miyata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide group/link"
              >
                Contact
                <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Monochrome Victory */}
      <section className="py-40 px-8 bg-black text-white relative overflow-hidden z-10">
        {/* Monochrome Victory Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800/20 via-transparent via-gray-600/10 to-gray-900/20"></div>
          {/* Monochrome Sparkles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}

          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-gray-400/20 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extralight mb-12 tracking-tight leading-tight relative group">
            <span className="hover:text-gray-300 transition-all duration-500">部活動指導を</span>
            <br />
            <span className="relative hover:text-gray-300 transition-all duration-500">
              次のレベルへ
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-white via-gray-400 via-gray-600 to-white bg-[length:200%_100%] animate-gradient-x"></div>
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-16 font-extralight tracking-wide">
            AI-Kommonで、すべての学生に最高の指導体験を
          </p>
        </div>
      </section>

      {/* Footer - Monochrome Champion's Podium */}
      <footer className="py-16 border-t border-gray-200 px-8 relative z-10 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-gray-500 font-light tracking-wide relative">
            © 2025 AI-Kommon開発チーム
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-black via-gray-600 to-black animate-pulse"></div>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
