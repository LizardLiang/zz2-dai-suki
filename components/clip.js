import {
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverFooter
} from '@chakra-ui/react'

export default function Clip({ videos }) {
  const wrapWord = title => {
    if (title.length > 20) {
      title = title.slice(0, 20) + ' ...'
    }
    return title
  }

  return videos.map(value => {
    try {
      let info = value.richItemRenderer.content.videoRenderer
      let videoURL = info.videoId
      let thumbNail = info.thumbnail.thumbnails[0].url
      let title = info.title.runs[0].text
      let author = info.ownerText.runs[0].text
      let uploadTime = info.publishedTimeText.simpleText

      return (
        <Popover trigger="hover" key={videoURL}>
          <PopoverTrigger>
            <Box>
              <LinkBox>
                <LinkOverlay
                  href={`https://www.youtube.com/watch?v=${videoURL}`}
                  target="_blanck"
                >
                  <Image src={thumbNail} objectFit="contain" />
                  {wrapWord(title)}
                </LinkOverlay>
              </LinkBox>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>{title}</PopoverHeader>
            <PopoverBody>{`作者: ${author}`}</PopoverBody>
            <PopoverFooter>{`上傳時間: ${uploadTime}`}</PopoverFooter>
          </PopoverContent>
        </Popover>
      )
    } catch (error) {
    }
  })
}
