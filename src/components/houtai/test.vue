<template>
  <div class="video-box">
    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "",
            src: "../static/day35_3_StringBuffer和StringBuilder的介绍.mp4" //视频url地址
          }],
          poster: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAGBAfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBaKKK+vPhzOvJJA+wnK+3FVRKwPWrWqW08ieZb43AcjPNYDTTQnDsT9a+CzPDVYYmXtHe+1+3/AAClFy2NR7kKhb5dy96s6g0lusKAne/Q+nAruvh74OtbjSbPXzch7pmfMWAyKvK7SP73fP0rl9a0t4LyON8GVJjGyjrXm1qTouEn1v8A8A7KuEnTpKUuolpunAB6j7x6dOpqW6ur1IvL0+7nhyNjMsrKSvp7L7UmwwReSCOTliO59KaeBkkAfWvq6dCGNw9PEY2dlZW1t835vp5eZhzuC5Yb9TKlttRuZQLifco4DA//AKqpalaTtbsssm4IwVcnk89a345Y5HCiRfr2FTyC2AxHGsj95XH8h2+vWuavluFlJUsE7zvffRLzf/DsUW/jkzP0i3W08ySSPc5AChug9cj+lXZHaV97nLU0ADpS17mX5fHC01zaz7/ouy/PchzbXL0CkpaK9EgVHaM7kYqfUHFZWpXk0Fw0uxJFZQGXaAR15FalV7q0jukw3DdmryM2y14yKcLcy/HyuXGbWnQh06/t7mJcu2WOBgdPY1qh4fMjkYFmQAKdnT9axLPSPsk5kE2VLbtu2tSuPD5Q69H2eNvo9Neli1VcdIli5uEmACKQBzz61Zg8T39ittCJ12xMTF5sYbrxgEjI+grOpK9Wll9CjRjRpr3U766/eCxFRSck7Py0J7u7nvrp7m5kMkrnLMahopG2+U+49uK2xNeOGoSqtaRRlrJ3ZXnuNgAQ9e9NtbpZHMJYFwNxqlqFwlvGr5yW4CjrmmaMSbiQkYzwSa+NwGPxE8VGtVm2uva3p/kUoN7I1Zp0iYK8gjyM7jWVL4gjiJTzmdRnAAJANbV0sVxCsPlqUBydw5J9ay30gs3ysqr6Y/8A1V2Y2jj8ViOZRko/Z1tb/Jle7HS9x+naiLlggJfPIOOn1rSqtZ2MVkhEa/Mxyxx1qzX0WApVqVBRrO7/AC8r9TN2voVjpwmuEkQoHTOFYcNn+Rr0/QfAunWcbLeKtzlFK8lQp53dDXl1zei3O1Rl/fpVhfGmujhL90XGAqqAAPbjivnMVPD4CtJYZu738vK52YXEUIP99G/9djt/EHhO1sNMhazWWS9LsSqnIKckk+mBgVxYUswCgknoBWpb/EXVljeKYQl2XaJNmCvvVbTdR/srUYr5o1kER3FW7jp+dexluO9vRlK9+Xv/AFsLESw9SadLRddNjr9O8B29xFZTy3byQzRl5PLwMEgFcZz71heKfA72LSXcAM9vA4VQx+chgOfTqQKlu/iZLHuTTbFIkDZG9s9+ePese+8e6hqdq9tdJF5bkH90Cp/nzXjVszWITpSl7stNtFrv8jqqzwCp2jv5X/UybGw+wqEON6gglTx9PerZOOaZFMky7kYEenpUlfR4DC0sPR5aTunrfueVKXM7mbNq0UUvLKI+mWOM1PDqn251CSxsFGByOnvVO+0VJ5zNGASeqE4GfWo7fRgr5kjCkd1PP5183joZjCt7RuTaejSuvki48qVrmyrhxkeuD9aryXQV8IQdpwatokKWqKi+WyDBHZvf61zM8629/KW+UFvm/GurMMwr/VoRV4z+10f/AAz/AOB3QOm1qtToo5BIgPGfSn1RtuUjcnAJ4q8wwxFdWSZlLFQlTqu84/iiGtLmxo/iO60iGSAKs9u4P7qQnCn1FRXmvTX2nw2MaRw20XVI8kM2c5ycnv61lsoZSrDIPBBoVQqhVAAHQCvUlhqbqqrZXXX+vv8AkbrFVVSdLmfL2LyywPbbZCNwG3awPSqyxQxQeWjoADkM2c4x06VHTWG5GA7ivKjkFClXeIpSkpavdW/FCeIbVmkyje6jFasP3gZT0C9WPpU+n3TSo8jQr8zfIHy20YHY8VlHRriS882Rk2hcDnOK2YIVgjCLk+pPeuLC4HG4iup4lu3W+z8rbE8/LrHcneR5Dl2LHtntTaKK+pjGMEoxVkjNtt3Y10SRcOoYehFOt0t4CcwJhupAww+hopKzq4elW+NfPr8nuhxk4u6Oe12yHmTNGdybtykjB9asol60QgHAQZDcZI7VrPEkgIkXcp4KnoanW2hEZa3YjHJR25H0PcV8pWymUK98Q/3d3735X7ebtb00NVeatHfsZ+m6tremyb7MCORT/rdgJI7jngj8K3ZNV1DU7QpcXT5c+Y8IAALevH8qzQQehB+hpwJUgjII6V6FPI6ULSoVWpLVbWv5rsOGJnFcrfu9ipfTtBAdg+bv9KhNy409Z1Y7DgfmTVu+hM8TThcYU7sevrWt4Q0T7dNbW1xbLcQGNpHiY8Hg4+nJHNfP5pi6uIxPs5aWaVunn6663HSouVRRj1OW80A5A+buSaBcvn7xGPStDxh4WuvCElo0kyTR3QOCgwFYdVwe3Iwa5tLqdm/doG9sZNcjoSjLzJq0alOTjLQ6S1meZfmXgd6sVWso3S3BkBV25IParNff5dGssNH2zvLz/rsYMKKKK7QCiiigAqlcaXaXLbpEOf8AZYirtFZ1KNOqrVIp+o02tjvvDXiS0azjspBBZtDEq72k2+YFGPTr9TWHrNxplvbPHpV358t0WE87Jh1BxwCQMA+vWudoztyfQE15WLyug4urbWOqXTz+89KOZVnT9i9n16kVxN5cRkALE9KpF2V9s7bTjJWtRrMTWLSOzKiuoG04LdzXOatpYa5zFJczlucNnI/LivBzbmq1lh46xhorLrZX9WcnJpzye5MbgnO0/hjFWbSaXzAo5B9TWHFYXu8RNFMB2LA/zFb+n6ebQbpJC7HoP7tTl+X4h4iLheNnq9tP66GUo8vUv0UUV9yQFFFFABRRRQAUlLRQAlLRRQAVXumdUG1CynIbaMkehqxRWVekqtN031GjKaxa8mVyrKkYwGII3E9+elXrW1jtYgijJ7t61PRXnYDKaWDk5p8z6X6Dcr6IKKKK9YkKKKKAMvV4ZygmgQNgYYenvXPveyp8vl5f0HFdpVVtNsnYs1tGSep214eNydV6rqQdr73Lg4r4kYVlPPdBxLaSnCE7oxuAwO9a10zLYwh5QqsQHZqswWcVupWPdsJztLZFalzbx5uJRxjY0ZHYtzn+deQ8LWwfNSlvUVlZ9eaK1v3v9yZrGnGom1pb/g/5ficNPqkUbMkaSOucbgtMF7uI2xlq6C40uO7n8yWRsdwgC5/GlttItLWTfGrE5yNzZxV0cjxEkuZKPzv+RH7u2iH6dGUtAWQqzHOCMEVcoor6uhRjRpxpx2RkFFFFagFZ17pgnkDx9xhge4rRorlxmEhiqThLfo+w1JoxrYLaRCGRwrRHkseNvbHrWtE5kiVyhQnnB609juILcn3orjyzLPqTk3K7fkOTT2EpaKK9YkKKKKACiiigAooooAKKKKAGsdqk4zjsKzJbyQsecD0x0rVrC1C0ukcvG+Yu2Oo+tfPZ/Rr1IJwfudV+o0TxSh5QCVDHoe9WBdvGQXyyZwSK5hpJ5G2rKyAdSBmtzS7S5a0kLXy7WGApQMSe3pj618rDnw9SNWDs1sbKk2rXNuKRlIaPa3RsMMqwz0I9CK73w1a26XMV/YXMUKzIQ1l5mWBycYGenoO1cHLC0EojfnAGPfI4pgYqcgkEdxX1X9n0sbVWI7qMrrq2v0s/v1OrD4t4R6xu9UdL8Q5tN1uNbQK/22KQbpcghAM5Uckc8Zx6VxtnpsVpyGLsOhbAxV2ivUp5fh4NS5btdTlxGIlWm5SCikpa7TAKKPwooAKKKKACiiigAooooAt3J22VrGO4Ln6k/wD1qqUrOzBQWJCjAz2pK5cJh3QpuLd23J/fJv8AU0qT55X8l+CE/GloorqMwopKWgAooooAKKKKACiiigAopKWgAoopKAFooooASloooAKSlooAKKKKACneYxTZn5SQcfSm0VMoRlZyV7DTa2CiiiqEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFGKMUAJS0YNLigBKKXFGKAG0tLg0YoAaAAMAChVVeAAB7CnbTRg0nFPdAWrn97ZWsp5Iyh/A8VUqQyOYViJ+RSWAx3NMxXJgsO8PTcH3lb0cm0vkmaVZqcrrsvyEooxS4rsMxKKXFG2gBKKXbRQAlFFFAgooooAKKKXFACUUuKXAoGNopTSUCCiiigYUUUUAFFFFAgooooAKKKKBhRRRQAUUUUAFFFFABRRRQAUUUUAJS0UUAFFFFABRRRigAooxS0AJRS4pcUANxS0uKXFADaMU7FGKAG4oxT8Uu2lcYzHtS4p22nKh7UXER7cUYqUoaNlFwGbaNlSqvtTwtK4rEGyjbU+ymhCTRcdiLbRsqwI6PLpXCxX2Ubas7KTy6OYditso2VZ8v2pRFRzBYrbKNlWfK9qPLo5h2K22irPl+1FHMPlKOPWlwKUtxjFJzWhjcSgKTUqJkcjH1pcAHAxSuJyISpFAqYRs7bV5oa2lB5Q0XRSbIs0hNPMTDqKaVIoHcbRS4ooASiiigApcUCloGJg0lLmjNABRRRzQIMUlOxRQMbS4qeK2aYgJ1q3/Yt1tyE+me9S5xW7KVOT1SM3FJitdPD2oPH5nk4Hpnn8qjk0W9jzmLOBn60lVh3B0qiV3FmZRV6LTpZRxTJrGWEHcp+tVzK9rk2dr2KtJTsYpKYhKKWjFACUU7FGKAExRinYpcUDGYpcU/FOVRuAbpnmlcCLFSeU2OlbUenQGISIC2RxnpTEswjZYn6Gs/aot05GQYnHVTTdta80qoCEHI9RWeRuYnHWqUriatoQ7aXbUoSnLGSQKLhYiCZOKsrZOygjGa07PRwTvkYN7DtWitiq9BWMq6WiN4YeT1ZzbWTqM9ah8s56V1Zswe1IbJc5xUrEIp4ZnNpaO4BxgVN9kK1u/ZOOBioms2Bzk0e2uJ4dox/s59KTyDjpWyICeopDbn+6KPai9gY/kMenSk8kg1s+R/s0gtO5FHtQ9gzH8k0qw4rWa0XPAppszjpT9qhexkZ3l0nl1fNuw7UnkkdqOcXs2UfLpfK9qu+T7Uvk+1HOPkKQipfLxV3yaXyfalzjUCh5dAiq95PtS+R7UuctUyj5VFXvI9qKOcr2Zy9PjxuGelMpRxXaeazT8hHjBVc8d6sWuno4yy1RhvAke0jpT/7Sl27Yxj6Vi4z2RrGVNas2fs8UYzgA1VmsZJ2ykq/TNZ5v7lvlOSfQiopJ5Q+H3IwP0NTGnJdS5VoNbGuNBMmGaUg9xWTf2b2c5RiCp+6QatWuqSxja7kj1NR3MaXDGRXyx7GnDnjL3noKbpyj7i1M6kqR42Q4ZSKZitzG4lLRRmkUgpM0UUAIBS4NLmjNAxtPFNzS5oAfxTcc0AmjNIZoaf8A6wfWuvtLiJVUMOa4m2ba4rrbEWMsaF5WLDGRnFceJj1Z34SfRG9A287UiPT0qw9grL86Zz1qzbyQiJdpGAO5qwsiP0YGvHlNp6HtxpprU599KgQllQAk1nX9vDHbsXIAx3rprsqAayJdKi1MgTO4VTnavRq6KVXrJ6HNWoq3LBannEkbEsVU7Qeo5qMoQcEEGvXLbT7a1j8mK3REHt1qK90PT75gbi3DMOAQSD+ldizGN7NaHA8qny6S1PKMGl212Wq+EGM5kscLHj7p7ViPoF/GMmE57L3NdUMRTmrpnFUwtam7NGTil21uDw1qAjDtFgH3zVefR7u2VmePheuP51SqwezJdGoldxZmBaXbUwSnBKq5mQ7aUJU4T2pQhpXKSNCx1A7BFMSQOAcdKsXpHlnBU1lKpByKkbc5yxrFwXNdGyqPl5WMPzckcVFs5zVgKaXy6vmM1EhVFPUflViOKPYMHDg9OuaURVqWOnRXCklyTjGMdDWc5qKuzWnTcnZF/T4naIbwM+oq75HtU1pCYIFiznbxk1ZVMmvNnUuz2adK0Uih5HtTTb+1anlCk8oYqfaF+yMowjPFN8rPUVpGAZpPI9qftCfZGWbY+lL9n9RWp5NIYxT9oL2Jl/ZhnpQYPatIxe1NMeKftBeyRmGAntTPJIrV8sU0wg9qaqEukZflZ6imm2B5rU+zjNHkD0qvaEujcyfs2O3FJ5HtWsYB6UnkD0p+1J9gZPke1L5PtWmbbjIFN8ij2hPsbGf5PtS+R7VoC39qXyMdqPaDVIz/ACfaitDyKKXtCvZHmtLS4oxXtHzlxKsWdybSfzAoYYwQagpcUmk1ZgpNO6NOzvhHMxVEZ25DN/Ktb7PHq0QEgVHB6qc1yw4q5bahNa8IRjuMVjUpX1judNLEJe7PYs31jbW8RVG/eKeT61njMfXjPOSKvHUklc+bAhGe4zVgC1uI8pgSgcZPFClKK94JRhN3gzPMyPCQ65b1FVXUDBHerM1vsBZWB9RVatI26GEm09RmKQipAKkVAaoakiDbRj2q2Iwad5S+lTzFJlA0Yq00YB6Um2quS5lfaaMVKVpuD6UFJ3GgVIBxTMHNWI48rUtmkVcSJeeoFaMfyhdrE+tZjoymlSYoeefrUNXLVludfYxXEgGCQo7k4rdinktsBnUg+lcTZaw6jazGtiO5MyjEm6vPrUpN6nqUKsVH3dzoZZ1l6NUltvRsiuejlZZR8xrpdPk3JjiuWpDkR10qntJFxDuUEjB7ipNgIoAIoL4HpXKdq8xpiqMwKTyoqTzQKPPTGSRT1FaIiwrtwBUMmnQyLhkBHvU3nx/3hQbhP71CclsDUXuYU3hSwETbIyGI656fSsiHwpPJNiTCoPQ5rsPODd6ljdMV0RxNWK3OWWDoTadrHOP4QtBEcPIHxwc1zF3YPZ3DRMQ2O4r0SW9iQlSRWNqQtJ4mbaC5HGWIrWhiKl/e1OfE4Sk4+5ZNHHiOnCOrhgIY8YpRFXdznmKmVRF7U4RZPSrYiq3Zw24fNwWx2xUSqWRpCld2M77M6gEoQD3rT011iRhj5q6C206wlg27CyMc5J5qpeaE0L+bacqOdh6j/GuV4iM/deh2xwk6dpx1JLSUTEKoLHvV8RMvVaj0yxMUay7jlhkr2rRIx2zXJUkuayPQpQfLeRR2EnNNYFeoq+EzyajmjBWoUi3DQpdaXBFOCGnBT6VdyLEJUmk2HvVnyz6UojzRzD5SoU9qaUq75Io8kUc4uQpeWaPKzV7yBThD7Uc4KmUhbmneRx0q8IsU7yxU85apozjB7UCEDqK0DGKbsFHOL2aKRiHpSC3U9quGOjbT5g5EUzAF7UwxCrxUUwoPShSJcEU/KFFXPKop84uQ8bxRinYoxX0x8UJijFOxRigY3FLinYoxSAbS07FJigA3HGMnFJinYoxQAinac4zVlBCYzlmD/TOar4py8Gk0UnYlANPAIFOiwwGetTCOs2zSMbldYjK4UEAnuafJYyRpvJUjOODnmnlSvTigPIowDge1K76FcseqIjYTjrE3XFKLVlYK64NWFllzneSferlqjzvhiDn1FTKbS1NIU4t2iZzWYPQULBsHANdRHojMmVYUyTThD97BrD6xF6HYsLNanOrbtIcEUkmmk8it/wCzoO1Ru6Lx0pqs76CdHT3jAXTmU5NX7YtCMVJNIT0xUAJzVtuS1MdIPQ0YmDMCxrfsJI0I/ec1yYJ7VLHPKrAjPFYVKXMtzqo4jkd7HfCcAfeqN7lM43A+1clFdXB7tU3nOeuc/WuP6tZ7noLGXWiNyS8RT8pziq76j84BTPsKyRuZgTnGa1re2s5FVjIxI6jNNwjDcUas5vTQkR57hiqQspx6VYOl3BQHzDuzyBxWrEIwi47DvUysD0NcrrPojtjQTXvMxv7PumX/AFqoOmAOasx24gTLM7YHetLimMBjpUOo3oWqUVqjIutNhvcFW2OPSq6aJGj75pQcDgVfuo2AJRth/nWc0rnKSE1vCUmrJnPUjBSu1qTSWtsYhE7IQOhxzVZtLtCCFJU5+8TTVBVs9fxpChY5OatJrqZNxe8SQ6PAI8o7Fs+tOg020SQM7kgHocVct2QW20DDVC+G+6BnuMVPPJ6Nmns4KzSL8csJYRx4GOwqyBWdDuRcqgz7danjmkzgoc+9Yyj2OiM+5eC4HAoxUUcuevBqUGsmaqwYpjAdxT6KBkHlA9BT/JHpUgApxouxKKI/LFHlrT6Si47DPLGKbsqakp3FYjCU4KKdilxSuOwzbSbakpMUBYjK0m2pcUmKLisRFKTZ7VNijbTuFiApSbKsbaNlHMLlIdtFT7aKLjseHYoxU3lGk8s+lfV3R8DysixS4qTYaNh9KLhYZijFP2GnBDRcdmR4qRbeZ1DJEzA9MDNO2ZIwOKnjmkjGFJUZyQpxmpcn0LjFX94qNE6HDKQfTFJtPTBrRF5IHdgqbm6kr1qT7a5B+QEkcnuannl2L9lDv+BlU4Crki27RfJEyyezZFQLESaalchwsxEyParMbE8UiQEiplhxUSkjaEWgKH2pu32qdYWxwDTxF6is+Y15GVgpqeFmjbIOKkEXtTxH7UnJFxg1qXoNSmiQBW596ma/81P3gyfUVnKhFTrxXO4Rvex1xqTtZsVps8AcVUlyW6Grm1TUqKoHKg01JRE4uXUyfL3GpRb8CtQrFt+6AaqSOqdKpVG9iHSUdyIWuRycU8WoVch8+1RGZieKBKxpvmEnDsWEkaPoakjcSMAByap4YnmrtlAxcYqJJJXNINt2NOPSZpI9+VA9M80klk8OOp9eK3LO2l8kAnqKspYxbfnBZvUmvPddp6nrLCprQwoYLqTAXcAO5rRR5bfAkxg+grQjhCr83r2pWgVuD0rKVVS3RtCjyrRkSTBu9K8wRck8VJ5CimyWqSLjke+azvG5taVjOublHHAJPvVErk5xitOXTWBzGwI9DVQxlSQRgjtXRCUbaHJOMr+8QBcU4L7VKEpQlPmJUSNVqQRmnhKvxZdACFOO1TKVjSMLlJARyDip0dwOW496tfZkbBIx7VIIkH8IrJzTNlTaKAYg9c1MknAyfwqWS3Dcjg1GIsHmi6Y7NEgcU8HNIEBFOC4qNC0AoNLRSGNop2KQigQ3NGaKKYBmjNFFABS0YpcUAJS0uKKQwxRRilxQAYooxS0gExRS0UDPGNtKV9aurYXLTGFbaUyA8rsORUDIUYqylSOCD2r6hST2PiHTa3RBt5pdoB71JsNG007i5RgUU4LS4PpTwppXGkM2jFGzNTrHUghz2qeYvkuVfLHpThH7Va8n2pwhPepcylTKojp3lgdqteSe9HkmlzlezK4yO1ODGphEc8UhiOelK6K5WIshFPV88GmhD6VLHCSaTsVG49UyKkEdTxxECpRFWLmdMaZWEZp4jqyIvanCOoczRUyt5dPCVYEXtTvL9qnmKUCjIDiqjoSa2DBu7VC9oe1VGaRE6TZleSSeBUiW7dxzWjFbMG5XIrRh055FBUDr3pyrJCp4ZyMmCweQjAP5V0em6YIsM681oW9okKAYGasgAdK4KuJctEepQwkYasFUKMCloorlO0KKKKACiiigBDUE6q0Z4GasU1lDCmnYTV0ZO2nBatS2+05U/hUWwjrW3Nc5+SwwLViBOc1GBUiMVHFJu5UVYsbto5pBJmotxPWlB/KosaXJgSaDTN1HmUrDuPyBQWpm7NGaLBcfmkzTaMUBcWijFLigBKXFGKXFACYpcUtGKVxhRS4oxSAMUUtFAwooooAKKKKACiiigArn/EOiQXVvJdImLhRkkH7wFdBUU8XnRFMkZ9K0pzcJKSMq1KNWDjJHmBtWo+ymu0k8OKzEpJge4zzVJ9EuEJ/dEgdx3r1Vi4vqeHLL5x3RzQtTUyWq9yQfpWsbPHalWzY5wpOOpApusQsNboZf2fHenrD7VpC3PpThB7UnVLVAz1g9qeIB6VfEPtThD7VDqGiolDyAaPsvtWiIacIqXtCvYozBaVKliWbA61oCKnqmCCO1S6rKVBEVtorTffAXBwciro8OxryJTn/dqzb3MpOBGXFXPMkz80ZA+ua5p1ql9zshQpW2MtdCO3mUZ/3aZc6UbePeH3Y6jGK3N1Qz7ZIypzUKtO+rNHQp20Rzwip3le1XPKwcUojFbc5zqmVBHSiKrfl+1KI6XOP2ZVEVWLeOINmQZqQRe1SrbOeQtTKRpGGo/FsQAExj0FP81UUBQT6cU5LcqvON30pGic9ce1ZXTNrNEiyMRyOadk+tQfvVHOQKblvU0rFcxZ3n1pd59qq8+poAo5Q5i3vNIWNVuaXmlyhzExZvWm+YwpgpeRRYLjjMaPONJ16ijAPQUaBqBkJpGJbqBS4pdtMBm0Y96XFP20baVwsNApcU7FLii47DcUuKdijFK47DcUuKdilxSCw3FLiloouMTFLiloxQAYooxS0gEpaKKBhRRRQAUUUUAFFFFABRRRQAUUUUARxybhzUlVkdR0BFSiQHvVNEpklFNDil3CpKuV57OOcDICnPUClgtkhRkByD1BqbcKazVV3axHLG9zOu7NUfeuACemOlVfJ9q15MMOQD9armIdhWsZu2pjKmr3RQ8kelL5Iq75dHl1XOT7MpeTThDVvy6NlHOHsyBLcH7xwKDEoOFzj3qxspQg70uYrkQ+2hCLnIz9asZyKgU7RgUu4jpWb1ZqrJWJW6VAwJzkmnqxHXmmsSxoWgPUrlOaAlT7aUKKrmI5SHZSiMnoKnwKcoA70uYfKQqjKcjOatJ0560mRRu9BUN3LSsSU0kCm7zSE5pWKuI7bhiowlSYoxVXJ3GFMUmKkxRii4WGAUoUU/FGKLhYQKtLgUYpcUhjdooxTsUuKAsNxRinYoxSCwmKXFLRRcYmKMUuKWgBKKWikAYooxS0AJRilooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBWCUoWpdtG2quTYZtpcU/FGKVwsMwaNpp+OaXFFx2IilG2pMUYouKxGYjSeWT2qaii4WIfKPpSbKnpMCncLEOyjZUu2jFFwsRbaXbUmKMCi4WI9tG2pcClwKLhYh20uw+lS0UrjsMEfrRsp9FFwsN2UbT2p1FFwsM2ml2n0p1FFwsNx7UmKkpMUXAbijFOxRii4DcUuKXFFACUUtGKQCUYp1FACUUtFACUUtFAxKMUtFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJijFLRQAmKMUtFACYpaKKACkpaKAExRilooATFGKWigBMUYpaKAExRilooATFGKWigBMUYpaKAExRilooATFGKWigBKWiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooJxQAUU3eoIBPXpS5oAWiiqt7qNtp8LS3MoRFGSTQJySV2WqK5C9+IGk2d2IzNHLE33XicE5xnBFbGneJ9I1V0jtL2N5WGRHn5vy/ClzK9rmMcTRlLlUlc16KTcKUHNM3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKQnFAC0VnalrunaVC0l3dRpgbtm4FiPYdTXKT/FLSUYiCCeYA4zwv481E6kIfE7GFTFUabtOSR3ZYDrWDq3jHR9I+Wa5Ekn9yIhj/OvL/EHju+1O4lFvNLbW5XCrvxke+P8AP1rmI5Zb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", //你的封面地址
          // width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
      }
    }
  }

</script>
<!--
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="main">
          <el-row>
            <el-input
              placeholder="请输入自己的昵称"
              prefix-icon="el-icon-user-solid"
              v-model="name"
              style="width:50%"
            ></el-input>
            <el-button type="primary" @click="conectWebSocket()">建立连接</el-button>
            <el-button type="danger">断开连接</el-button>
          </el-row>
          <el-row>
            <el-input
              placeholder="请输入对方频道号"
              prefix-icon="el-icon-phone"
              v-model="aisle"
              style="width:40%"
            ></el-input>
          </el-row>
          <el-row>
            <el-input
              placeholder="请输入要发送的消息"
              prefix-icon="el-icon-s-promotion"
              v-model="messageValue"
              style="width:50%"
            ></el-input>
            <el-button type="primary" @click="sendMessage()">发送</el-button>
          </el-row>
          <div class="message">
            <div v-for="(value,key,index) in messageList" :key="index">
              <el-tag v-if="value.name==name" type="success" style="float:right">我：{{value.msg}}</el-tag>
              <br />
              <el-tag v-if="value.name!=name" style="float:left">{{value.name}}：{{value.msg}}</el-tag>
              <br />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

&lt;!&ndash;不需引用插件&ndash;&gt;

<script>
  export default {
    data() {
      return {
        name: "", // 昵称
        websocket: null, // WebSocket对象
        aisle: "", // 对方频道号
        messageList: [], // 消息列表
        messageValue: "" // 消息内容
      };
    },
    methods: {
      conectWebSocket: function() {
        console.log("建立连接");
        if (this.name === "") {
          this.$alert("请输入自己的昵称", "提示", {
            confirmButtonText: "确定",
            callback: action => {}
          });
        } else {
          //判断当前浏览器是否支持WebSocket
          if ("WebSocket" in window) {
            this.websocket = new WebSocket(
              "ws://localhost:8012/websocket/" + this.name
            );
          } else {
            alert("不支持建立socket连接");
          }
          //连接发生错误的回调方法
          this.websocket.onerror = function() {

          };
          //连接成功建立的回调方法
          this.websocket.onopen = function(event) {

          };
          //接收到消息的回调方法
          var that = this;
          this.websocket.onmessage = function(event) {
            var object = eval("(" + event.data + ")");
            console.log(object);
            alert(object)
            if (object.type == 0) {
              // 提示连接成功
              console.log("连接成功");
              that.showInfo(object.people, object.aisle);
            }
            if (object.type == 1) {
              //显示消息
              console.log("接受消息");
              that.messageList.push(object);//添加到数组
            }
          };
          //连接关闭的回调方法
          this.websocket.onclose = function() {};
          //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
          window.onbeforeunload = function() {
            this.websocket.close();
          };
        }
      },
      // 发送消息
      sendMessage: function() {
        var socketMsg = { msg: this.messageValue, toUser: this.aisle };
        if (this.aisle == "") {
          //群聊.
          socketMsg.type = 0;
        } else {
          //单聊.
          socketMsg.type = 1;
        }
        this.websocket.send(JSON.stringify(socketMsg));
      },
      showInfo: function(people, aisle) {
        this.$notify({
          title: "当前在线人数：" + people,
          message: "您的频道号：" + aisle,
          duration: 0
        });
      }
    }
  };
</script>

<style scoped>
  .main {
    position: relative;
    top: 20px;
  }
  .message {
    position: relative;
    overflow:auto;
    top: 20px;
    width: 100%;
    height: 40%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5px;
  }
</style>
-->
