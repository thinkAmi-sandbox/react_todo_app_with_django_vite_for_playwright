// https://docs.djangoproject.com/en/4.1/howto/csrf/#acquiring-the-token-if-csrf-use-sessions-and-csrf-cookie-httponly-are-false
const getCookie = (name) => {
  let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// https://stackoverflow.com/questions/50732815/how-to-use-csrf-token-in-django-restful-api-and-react
export const CsrfToken = () => {
  const csrfToken = getCookie('csrftoken')

  return (
    <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
  )
}