
    var rightAnswers = 0;
    var wrongAnswers = 0;

    computeAnswer = (message, isRight) => {
      if (isRight) {
        ++rightAnswers
        console.log('right answers', rightAnswers)
      } else {
        ++wrongAnswers
        console.log('wrong answers', wrongAnswers)
      }

      $('#message-box').removeClass("is-visible")
      $('#message').html(`<strong>${message}</strong>`)
      setTimeout(() => {
        $('#message-box').addClass("is-visible")
        $('#message').html('')
      }, 3000)
    }

    $("#continue").click(() => {
      $("#question-one").removeClass("is-visible")
    })

    let currentPage = 0
    let pages = ['question-one', 'question-two', 'question-three', 'question-four', 'question-five']
    const nextPage = () => {
      ++currentPage

      if (currentPage == pages.length) {
        current = pages[pages.length - 1]
        $(`#${current}`).addClass("is-visible")
        $('#score-page').removeClass("is-visible")
        $('#scores-right').val(rightAnswers)
        $('#scores-wrong').val(wrongAnswers)
      } else {
        current = pages[pages.length - 1]
        prev = pages[currentPage - 1]
        $(`#${current}`).removeClass("is-visible")
        $(`#${prev}`).addClass("is-visible")
      }
    }

    $(".right").click(() => {
      computeAnswer("Right", true)
      nextPage()
    })
    $(".wrong").click(() => {
      computeAnswer("Wrong", false)
      nextPage()
    })
