FROM python:3.8.6
RUN pip install flask gunicorn
WORKDIR /project
COPY app.py ./
CMD ["gunicorn", "app:app"]