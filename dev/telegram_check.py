"""Run with python3 dev/telegram_check.py; never prints credentials or messages."""

import json
from pathlib import Path
import urllib.error
import urllib.request


ENV_FILE = Path(__file__).resolve().parents[1] / ".env"


def read_token():
    token = ""
    for line in ENV_FILE.read_text().splitlines():
        key, separator, value = line.strip().removeprefix("export ").partition("=")
        if separator and key.strip() == "TELEGRAM_BOT_TOKEN":
            value = value.strip()
            if value.startswith(("'", '"')):
                quote = value[0]
                value = value[1:].partition(quote)[0]
            else:
                value = value.split(" #", 1)[0].strip()
            token = value
    if not token:
        raise ValueError("missing token")
    return token


def call(token, method):
    with urllib.request.urlopen(
        f"https://api.telegram.org/bot{token}/{method}", timeout=20
    ) as response:
        payload = json.load(response)
    if payload.get("ok") is not True:
        raise ValueError("Telegram rejected request")
    return payload["result"]


def main():
    try:
        token = read_token()
    except (OSError, ValueError):
        print("Set TELEGRAM_BOT_TOKEN in the repository-root .env file.")
        return 1

    try:
        print("Bot username:", call(token, "getMe")["username"])
        webhook = bool(call(token, "getWebhookInfo").get("url"))
        print("Webhook configured:", webhook)
        if webhook:
            print("A webhook prevents getUpdates. No configuration was changed.")
            return 0
        # No offset: do not acknowledge/discard pending updates.
        updates = call(token, "getUpdates")
        print("Updates received:", len(updates))
        groups = {}
        for update in updates:
            for value in update.values():
                if not isinstance(value, dict):
                    continue
                chat = value.get("chat", {})
                if chat.get("type") in ("group", "supergroup"):
                    groups[chat["id"]] = chat.get("title", "Untitled group")
        for chat_id, title in groups.items():
            print("Group:", chat_id, title)
        if not groups:
            print("No group found. Add this bot to your group, send /start@<bot username>, then rerun.")
        else:
            print("Add the intended group ID to .env as TELEGRAM_CHAT_ID (keep the minus sign).")
        return 0
    except urllib.error.HTTPError as error:
        print(f"Telegram returned HTTP {error.code}. Check bot credentials or conflicting polling/webhooks.")
        return 1
    except Exception:
        # Exception strings can contain the request URL and therefore the token.
        print("Telegram request failed; secret details suppressed. Check connectivity and bot configuration.")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
