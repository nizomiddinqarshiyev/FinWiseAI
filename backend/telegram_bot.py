"""
Minimal Telegram bot skeleton. Requires python-telegram-bot (v13/v20 API differences).
Set TELEGRAM_TOKEN environment variable before running.
"""
import os
from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext
from finhealth_calculator import calculate_budget, savings_rate, financial_health_score

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")

def start(update, context):
	"""Send a welcome message to the user."""
	update.message.reply_text("Salom! Moliyaviy yordamchi botga xush kelibsiz.")

def handle_text(update, context):
	"""Handle text messages."""
	text = update.message.text or ""
	if text.lower().startswith("calc"):
		# expected: calc income fixed variable savings
		parts = text.split()
		try:
			_, income, fixed, variable, savings = parts
			income = float(income); fixed = float(fixed); variable = float(variable); savings = float(savings)
			res = calculate_budget(income, fixed, variable)
			rate = savings_rate(income, savings)
			score = financial_health_score(income, fixed+variable, savings)
			update.message.reply_text(f"Disposable: {res['disposable']}\nSavings%: {rate}%\nScore: {score}")
		except Exception:
			update.message.reply_text("Iltimos: calc <income> <fixed> <variable> <savings>")
	else:
		update.message.reply_text("Noto'g'ri buyruq. /start bilan boshlang.")

def run_bot():
	"""Run the bot."""
	if not TELEGRAM_TOKEN:
		print("TELEGRAM_TOKEN muhit o'zgaruvchisi o'rnatilmagan.")
		return
	try:
		updater = Updater(token=TELEGRAM_TOKEN, use_context=True)
		dp = updater.dispatcher
		dp.add_handler(CommandHandler("start", start))
		dp.add_handler(MessageHandler(Filters.text & ~Filters.command, handle_text))
		updater.start_polling()
		print("Bot ishga tushdi.")
		updater.idle()
	except Exception as e:
		print("Botni ishga tushirishda xatolik:", e)