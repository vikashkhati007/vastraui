import TextMorphAnimation from '@/components/CustomComponent/Text/MorphText'
import React from 'react'

const texts = [
    "If",
    "You",
    "Like",
    "It",
    "Please",
    "Give",
    "a Love",
    ":)",
    "by @vikashkhati007"
  ]
const TextMorphAnimationDemo = () => {
  return (
    <TextMorphAnimation texts={texts}/>
  )
}

export default TextMorphAnimationDemo