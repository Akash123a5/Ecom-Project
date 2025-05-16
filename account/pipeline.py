from django.contrib.auth import get_user_model
from social_core.exceptions import AuthException

User = get_user_model()

def link_to_existing_user(strategy, details, backend, uid, user=None, *args, **kwargs):
    email = details.get('email')

    # যদি social auth user না থাকে, কিন্তু email দিয়ে user থাকে, তাহলে তাকে রিটার্ন করো
    if user is None and email:
        try:
            user = User.objects.get(email=email)
            return {'user': user}
        except User.DoesNotExist:
            pass  # যদি ইউজার না থাকে, তাহলে পরের pipeline `create_user` ট্রিগার করবে
